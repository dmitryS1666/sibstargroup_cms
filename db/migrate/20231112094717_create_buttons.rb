class CreateButtons < ActiveRecord::Migration[7.0]
  def change
    create_table :buttons do |t|
      t.string :name
      t.string :title
      t.string :language

      t.timestamps
    end
  end
end
