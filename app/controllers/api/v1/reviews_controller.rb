class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @meme = Meme.find(params[:meme_id])
    @reviews = @meme.reviews
    render json: @reviews
  end
end
