class MemesController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    @memes = Meme.all
    @user = current_user
  end

  def show
    @current_user = current_user
  end

  def new
    @meme = Meme.new
  end

  protected

  def authorize_user
    if !user_signed_in?
      flash[:notice] = "Please sign in or create an account."
      redirect_to new_user_session_path
    end
  end
end
