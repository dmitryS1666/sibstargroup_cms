class TxtButton < ApplicationRecord
  # extend Mobility
  # translates :title, type: :string

  validates :name, presence: { message: 'can\'t be empty' }
  validates :title, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }
end
