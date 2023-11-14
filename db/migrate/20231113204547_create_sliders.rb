class CreateSliders < ActiveRecord::Migration[7.0]
  def change
    create_table :sliders do |t|
      t.text :text
      t.string :base_image_url
      t.string :language

      t.timestamps
    end
  end
end
