class CreateTitles < ActiveRecord::Migration[7.0]
  def change
    create_table :titles do |t|
      t.string :name
      t.string :title
      t.string :language

      t.timestamps
    end
  end
end
