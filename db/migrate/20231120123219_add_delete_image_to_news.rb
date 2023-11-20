class AddDeleteImageToNews < ActiveRecord::Migration[7.0]
  def change
    add_column :news, :delete_file, :boolean, default: false
  end
end
