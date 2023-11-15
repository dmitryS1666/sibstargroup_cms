class News < ApplicationRecord
  has_one_attached :image

  private

  def self.items
    where(language: I18n.locale).limit(3)
  end

  def self.items_by_locale
    where(language: I18n.locale)
  end
end
