class CreateNavigations < ActiveRecord::Migration[7.0]
  def change
    create_table :navigations do |t|
      t.string :name
      t.string :title
      t.string :url
      t.string :language

      t.timestamps
    end
  end
end
