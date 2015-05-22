class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :links, :type, :kind
  end
end
