class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @meme = Meme.find(params[:meme_id])
    @reviews = @meme.reviews
    @current_user = current_user.id
    render json: {reviews: @reviews, current_user: @current_user }
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

  def destroy
    review = Review.find(params[:id])
    if params[:review][:id].to_i == current_user.id
      Review.find(params[:id]).delete
      render json: {deletedReview: review}
    else
      flash.now["You are not the owner of this review."]
      render json: {id: params[:id]}
    end
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :meme_id, :rating, :comment)
  end
end
