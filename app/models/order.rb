class Order < ApplicationRecord
  validates :coal_name, :basis_supply, :delivery_direction, :destination_station,
            :name, :email, :message, :count, :organization, :price, :phone,
            presence: true
end
