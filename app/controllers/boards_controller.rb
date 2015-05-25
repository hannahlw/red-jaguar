class BoardsController < ApplicationController
  
  before_action :authenticate_user!

  def index
    @boards = Board.all
  end
 

  def show
    @board = Board.find(params[:id])
    @web_links = @board.links.where(kind: 1)
    @youtube_links = @board.links.where(kind: 2)
    @twitter_links = @board.links.where(kind: 3)
  end


end
