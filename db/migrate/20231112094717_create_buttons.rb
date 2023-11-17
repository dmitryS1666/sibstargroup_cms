class CreateButtons < ActiveRecord::Migration[7.0]
  def change
    create_table :txt_buttons do |t|
      t.string :name
      t.string :title
      t.string :language

      t.timestamps
    end
  end
end
