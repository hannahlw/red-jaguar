class AddDescriptionWithDefaultToLinks < ActiveRecord::Migration
  def change
    add_column :links, :description, :string, :default => 'Who needs a description?'
  end
end
