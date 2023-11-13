class CreateGenerals < ActiveRecord::Migration[7.0]
  def change
    create_table :generals do |t|
      t.string :name
      t.text :text
      t.string :language

      t.timestamps
    end
  end
end
