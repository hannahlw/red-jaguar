class BoardsController < ApplicationController
  before_action :authenticate_user!, only: [:new]

  def new
    @board = Board.new
    @user = current_user
  end

  def create
    hash = board_params["links_attributes"]
    valid_links = hash.reject{|k, v| v["url"] == ""}
    final_hash = {}
    final_hash["name"] = board_params["name"]
    final_hash["user_id"] = board_params["user_id"]
    final_hash["links_attributes"] = valid_links
    final_hash["tags_attributes"] = board_params["tags_attributes"]
    @board = Board.create(final_hash)
    redirect_to @board
  end

  def search
    filter = params[:search_term]
    @search_term = params[:search_term]
    @boards = Board.joins(:tags).where('tags.name' => filter).limit(9)
  end

  def index
    @boards = Board.order(views: :desc).limit(9)
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
    @youtube_links = @board.links.where(kind: 2)
    @twitter_links = @board.links.where(kind: 3)
    @soundcloud_links = @board.links.where(kind: 4)
    @web_links = @board.links.where(kind: 1)
    @text = @board.links.where(kind: 5)
    @current_user = current_user
  end

  private

  def board_params
    params.require(:board).permit(:name, :user_id, :links_attributes => [:url,:kind], :tags_attributes => [:name])
  end


end
