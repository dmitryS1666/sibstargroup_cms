class CreateCookies < ActiveRecord::Migration[7.0]
  def change
    create_table :cookies do |t|
      t.string :title
      t.string :btn
      t.string :language

      t.timestamps
    end
  end
end
