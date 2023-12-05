class CreateSliderSales < ActiveRecord::Migration[7.0]
  def change
    create_table :slider_sales do |t|
      t.text :text
      t.string :base_image_url
      t.string :language
      t.boolean :delete_file

      t.timestamps
    end
  end
end
