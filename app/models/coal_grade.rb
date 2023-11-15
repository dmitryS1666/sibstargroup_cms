class CoalGrade < ApplicationRecord
  has_many :coal_grade_items, dependent: :destroy
end
