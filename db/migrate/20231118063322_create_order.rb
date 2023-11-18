class CreateOrder < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :coal_name
      t.string :basis_supply
      t.string :delivery_direction
      t.string :destination_station
      t.integer :count
      t.string :name
      t.string :organization
      t.string :email
      t.string :price
      t.string :phone
      t.string :message
    end
  end
end
