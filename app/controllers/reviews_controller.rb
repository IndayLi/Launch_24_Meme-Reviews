class ReviewsController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def new
    @review = Review.new
    @user = current_user
  end

  protected

  def authorize_user
    if !user_signed_in?
      flash[:notice] = "Please sign in or create an account."
      redirect_to new_user_registration_path
    end
  end
end


# unneeded?
