class AddPageToTitles < ActiveRecord::Migration[7.0]
  def change
    add_column :titles, :page, :string
  end
end
