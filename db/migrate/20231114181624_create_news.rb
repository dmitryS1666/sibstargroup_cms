class CreateNews < ActiveRecord::Migration[7.0]
  def change
    create_table :news do |t|
      t.string :title
      t.text :content
      t.string :language

      t.timestamps
    end
  end
end
