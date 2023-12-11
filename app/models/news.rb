class News < ApplicationRecord
  has_one_attached :image
  before_save :remove_attach_img_by_flag

  validates :title, presence: { message: 'can\'t be empty' }
  validates :content, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }

  private

  def self.items
    where(language: I18n.locale).order(created_at: :desc).limit(3)
  end

  def self.items_by_locale
    where(language: I18n.locale).order(created_at: :desc)
  end

  def remove_attach_img_by_flag
    image.purge if delete_file? && image.attached?
    self.delete_file = false
  end
end
