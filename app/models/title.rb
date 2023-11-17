class Title < ApplicationRecord
  validates :name, presence: { message: 'can\'t be empty' }
  validates :title, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }
end
