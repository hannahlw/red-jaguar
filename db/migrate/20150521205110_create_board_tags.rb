class CreateBoardTags < ActiveRecord::Migration
  def change
    create_table :board_tags do |t|
      t.integer :board_id
      t.integer :tag_id
      
      t.timestamps null: false
    end
  end
end
