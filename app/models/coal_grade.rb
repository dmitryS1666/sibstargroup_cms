class CoalGrade < ApplicationRecord
  has_one_attached :pdf_file
  before_save :remove_attach_file_by_flag

  has_many :coal_grade_items, dependent: :destroy

  validates :name, presence: { message: 'can\'t be empty' }

  def remove_attach_file_by_flag
    pdf_file.purge if delete_file? && pdf_file.attached?
    self.delete_file = false
  end
end
