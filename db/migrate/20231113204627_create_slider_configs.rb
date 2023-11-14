class CreateSliderConfigs < ActiveRecord::Migration[7.0]
  def change
    create_table :slider_configs do |t|
      t.text :name
      t.integer :value

      t.timestamps
    end
  end
end
