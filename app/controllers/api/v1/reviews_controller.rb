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

  def destroy
    review = Review.find(params[:id])
    if params[:review][:id].to_i == current_user.id || current_user.role == 'admin'
      Review.find(params[:id]).delete
      render json: {deletedReview: review}
    else
      render json: {id: params[:id]}
    end
  end

  def update
    review = Review.find(params[:id])
    review.rating = params[:rating]
    review.comment = params[:comment]
    if review.save
      render json: {error: ""}
    else
      render json: {error: "That is not a valid rating."}
    end
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :meme_id, :rating, :comment)
  end
end
