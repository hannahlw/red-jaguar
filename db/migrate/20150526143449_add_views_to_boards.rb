class AddViewsToBoards < ActiveRecord::Migration
  def change
    add_column :boards, :views, :integer
  end
end
