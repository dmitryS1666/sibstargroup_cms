class AddDeleteImageToSlider < ActiveRecord::Migration[7.0]
  def change
    add_column :sliders, :delete_file, :boolean
  end
end
