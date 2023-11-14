class News < ApplicationRecord
  has_one_attached :image

  private

  def self.items
    where(language: I18n.locale).limit(3)
  end
end
