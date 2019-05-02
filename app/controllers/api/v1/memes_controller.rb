class Api::V1::MemesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    memes = Meme.all
    render json: memes
  end

  def create
    user_input = JSON.parse(request.body.read)
    meme = Meme.new(
      user_id: user_signed_in,
      title: user_input["title"],
      imageUrl: user_input["imageUrl"],
      description: user_input["description"]
    )

    if meme.save
      render json: { meme: meme }
    else
      render json: { error: meme.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    meme = Meme.find(params[:id])
    user = user_signed_in
    render json: {meme: meme, current_user: user}
  end

  def destroy
    meme = Meme.find(params[:id])
    meme.delete
    render json: {id: params[:id]}
  end

  private

  def user_signed_in
    current_user
  end

  def meme_params
    require(:meme).permit(:user_id, :title, :imageUrl, :description)
  end
end
