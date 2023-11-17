class CookieElement < ApplicationRecord
  validates :title, presence: { message: 'can\'t be empty' }
  validates :btn, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }
end
