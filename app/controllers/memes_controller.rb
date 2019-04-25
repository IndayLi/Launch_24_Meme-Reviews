class MemesController < ApplicationController
  # before_action :authenticate_user!, except: [:index, :show]
  before_action :authorize_user, except: [:index, :show] ## Added 'new and create' for dev, will need to remove/refactor for production
  # before_action :authorize_admin, except: [:index, :show]

  def index
    @memes = Meme.all
  end

  def new
    @meme = Meme.new
    @user = current_user
  end


  protected

  # def authorize_admin
  #   if !current_user.admin?
  #     raise ActionController::routingError.new("Not Found")
  #   end
  # end

  def authorize_user
    # binding.pry
    if !user_signed_in?
    # binding.pry
      flash[:notice] = "Please sign in or create an account."
      # binding.pry
      redirect_to new_user_registration_path
    end
  end
end
