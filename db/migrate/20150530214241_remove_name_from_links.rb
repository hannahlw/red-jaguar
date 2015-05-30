class RemoveNameFromLinks < ActiveRecord::Migration
  def change
    remove_column :links, :name
  end
end
