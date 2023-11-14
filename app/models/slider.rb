class Slider < ApplicationRecord
  has_one_attached :image

  private

  def self.items
    where(language: I18n.locale)
  end
end