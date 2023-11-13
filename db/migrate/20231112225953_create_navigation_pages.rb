class CreateNavigationPages < ActiveRecord::Migration[7.0]
  def change
    create_table :navigation_pages do |t|
      t.string :name
      t.string :title
      t.string :anchor
      t.string :language

      t.timestamps
    end
  end
end
