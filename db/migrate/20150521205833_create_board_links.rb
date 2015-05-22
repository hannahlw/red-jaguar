class CreateBoardLinks < ActiveRecord::Migration
  def change
    create_table :board_links do |t|
      t.integer :board_id
      t.integer :link_id

      t.timestamps null: false
    end
  end
end
