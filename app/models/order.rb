class Order < ApplicationRecord
  validates :name, :email, :message, presence: true
end
