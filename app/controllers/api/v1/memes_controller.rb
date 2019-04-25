class Api::V1::MemesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    memes = Meme.all
    render json: memes
  end

  def create
    meme = Meme.new(user_id: params[:user_id], title: params[:title], imageUrl: params[:imageUrl], description: params[:description])

    # meme = Meme.new(user_id: 3, title: params[:title], imageUrl: params[:imageUrl], description: params[:description])
    if meme.save
      render json: { meme: meme }
    else
      render json: { error: meme.errors.full_messages }, status: :unprocessable_entity
    end
  end
  # private
  #
  # def meme_params
  #   require(:meme).permit(:user_id, :title, :imageUrl, :description)
  # end
end
