class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :title
      t.string :person
      t.string :address
      t.string :phone_num

      t.string :language

      t.timestamps
    end
  end
end
