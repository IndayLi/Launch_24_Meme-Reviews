class MemesController < ApplicationController
  before_action :authorize_user, except: [:index, :show]
  before_action :authorize_admin, except: [:index, :show, :create]

  def index
    @memes = Meme.all
  end

  protected

  def authorize_admin
    if !current_user.admin?
      raise ActionController::routingError.new("Not Found")
    end
  end

  def authorize_user
    if !user_signed_in?
      flash[:notice] = "Please sign in or create an account."
      redirect_to new_user_registration
    end
  end
end
