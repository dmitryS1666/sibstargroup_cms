class CreateCookieElements < ActiveRecord::Migration[7.0]
  def change
    create_table :cookie_elements do |t|
      t.string :title
      t.string :btn
      t.string :language

      t.timestamps
    end
  end
end
