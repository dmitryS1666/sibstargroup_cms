class Slider < ApplicationRecord
  has_one_attached :image
  before_save :remove_attach_img_by_flag

  validates :text, presence: { message: 'can\'t be empty' }
  # validates :image, presence: { message: 'can\'t be empty' }

  private

  def self.items
    where(language: I18n.locale)
  end

  def remove_attach_img_by_flag
    image.purge if delete_file? && image.attached?
    self.base_image_url = '' if delete_file? && !base_image_url.nil?
    self.delete_file = false
  end
end
