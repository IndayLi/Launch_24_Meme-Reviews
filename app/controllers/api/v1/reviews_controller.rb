class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @meme = Meme.find(params[:meme_id])
    @reviews = @meme.reviews
    render json: @reviews
  end

  def create
    input_data = review_params
    input_data['user'] = current_user
    review = Review.new(input_data)

    if review.save
      render json: { review: review }
    else
      render json: { error: review.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :meme_id, :rating, :comment)
  end
end
