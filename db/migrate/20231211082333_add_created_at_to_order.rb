class AddCreatedAtToOrder < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :created_at, :datetime
  end
end
