class CoalGrade < ApplicationRecord
  has_one_attached :pdf_file
  has_many :coal_grade_items, dependent: :destroy

  validates :name, presence: { message: 'can\'t be empty' }
end
