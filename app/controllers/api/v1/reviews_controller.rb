class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    user_input = JSON.parse(request.body.read)

    review = Review.new(
      user: current_user,
      meme_id: params[:id],
      rating: user_input["rating"],
      comment: user_input["comment"]
    )

    if review.save
      render json: { review: review }
    else
      render json: { error: review.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  def show
  end

  private

  def review_params
    require(:review).permit(:user_id, :meme_id, :rating, :comment)
  end
end
