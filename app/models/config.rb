class Config < ApplicationRecord
  validates :name, presence: { message: 'can\'t be empty' }
  validates :value, presence: { message: 'can\'t be empty' }
end
