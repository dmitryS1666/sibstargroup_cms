class CreateCommands < ActiveRecord::Migration[7.0]
  def change
    create_table :commands do |t|
      t.string :person
      t.string :desc
      t.string :base_image_url
      t.string :language

      t.timestamps
    end
  end
end
