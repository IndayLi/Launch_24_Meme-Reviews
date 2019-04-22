class MemesController < ApplicationController

  def index
    @memes = Meme.all 
  end

end
