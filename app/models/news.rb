class News < ApplicationRecord
  has_one_attached :image
  validates :title, presence: { message: 'can\'t be empty' }
  validates :content, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }

  private

  def self.items
    where(language: I18n.locale).limit(3)
  end

  def self.items_by_locale
    where(language: I18n.locale)
  end
end
