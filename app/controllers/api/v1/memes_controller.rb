class Api::V1::MemesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    memes = Meme.all
    render json: memes
  end

  def create
    user_input = JSON.parse(request.body.read)
    binding.pry
    meme = Meme.new(
      user: current_user,
      title: user_input["title"],
      imageUrl: user_input["imageUrl"],
      description: user_input["description"]
    )
    if meme.save
      binding.pry
      render json: { meme: meme }
    else
      binding.pry
      render json: { error: meme.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    meme = Meme.find(params[:id])
    render json: meme
  end

  private

  def meme_params
    require(:meme).permit(:user_id, :title, :imageUrl, :description)
  end
end
