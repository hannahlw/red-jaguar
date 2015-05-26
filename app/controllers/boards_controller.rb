class BoardsController < ApplicationController

  def new
    @board = Board.new
    @user = current_user
  end

  def create
    @board = Board.create(board_params)
    redirect_to @board
  end

  def index
    @boards = Board.joins(:tags).where('tags.name' => "Pop Culture").limit(9)
  end

  def filter
    filter = params[:filter_by]
    filtered_boards = Board.joins(:tags).where('tags.name' => filter).limit(9)
    boards_array = filtered_boards.map do |board|
      {id: board.id, name: board.name} 
    end 
    message = {boards: boards_array}
    respond_to do |format|
      format.html {redirect_to root_path}
      format.json {render json: {message: message}}
    end

  end
 
  def show
    @board = Board.find(params[:id])
    @board.increment
    @web_links = @board.links.where(kind: 1)
    @youtube_links = @board.links.where(kind: 2)
    @twitter_links = @board.links.where(kind: 3)
  end

  private

  def board_params
    params.require(:board).permit(:name, :user_id, :links_attributes => [:url,:kind], :tags_attributes => [:name])
  end


end
