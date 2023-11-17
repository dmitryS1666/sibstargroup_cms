class CoalGradeItem < ApplicationRecord
  belongs_to :coal_grade

  validates :value, numericality: {
    greater_than: 0,
    less_than_or_equal_to: 100,
    message: 'percent - must be between - more than 0 and less than 100'
  }, if: :is_percent?

  validates :value, numericality: {
    greater_than: 0,
    less_than_or_equal_to: 999999,
    message: 'weight - must be between - more than 0 and less than 999999'
  }, if: :is_weight?

  validates :value, format: {
    with: /\A\d+-\d+\z/,
    message: 'size - must contain range ex. 10-100 or 20-50'
  }, if: :is_size?

  def is_weight?
    name =~ /kg/i
  end

  def is_percent?
    name =~ /%/i
  end

  def is_size?
    name =~ /mm/i
  end
end
