class Api::V1::MemesController < ApplicationController

  def index
    memes = Meme.all
    render json: memes
  end

end
