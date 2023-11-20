class AddDeleteImageToCommand < ActiveRecord::Migration[7.0]
  def change
    add_column :commands, :delete_file, :boolean, default: false
  end
end
