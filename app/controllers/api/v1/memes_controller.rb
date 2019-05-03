class Api::V1::MemesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    memes = Meme.all
    render json: memes
  end

  def create
    user_input = JSON.parse(request.body.read)
    meme = Meme.new(
      user: user_signed_in,
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
    user = user_signed_in

    if user.id == meme.user.id || user.role == "admin"
      meme.delete
      render json: {id: params[:id]}
    else
      flash.now[:errors] = "You must be the creator of this meme to delete!"
      render json: {id: params[:id]}
    end
  end

  def update
    meme = Meme.find(params[:meme_id])
    if current_user.id == meme.user.id || current_user.role == "admin"
      meme.title = params[:title]
      meme.description = params[:description]
      if meme.save
        render json: {error: ""}
      else
        render json: {error: "That is not a valid input."}
      end
    else
      render json: {error: "You did not post these Meme."}
    end
  end

  private

  def user_signed_in
    current_user
  end

  def meme_params
    require(:meme).permit(:user_id, :title, :imageUrl, :description)
  end
end
