class Slider < ApplicationRecord
  has_one_attached :image
  before_save :remove_attach_img_by_flag

  validates :text, presence: { message: 'can\'t be empty' }
  # validates :image, presence: { message: 'can\'t be empty' }
  # validates logo_validation

  private

  def self.items
    where(language: I18n.locale)
  end

  def remove_attach_img_by_flag
    image.purge if delete_file? && image.attached?
    self.base_image_url = '' if delete_file? && !base_image_url.nil?
    self.delete_file = false
  end

  def logo_validation
    if image.attached?
      if image.blob.byte_size > 1000000
        image.purge
        self.errors.add(:image, 'Too big')
      elsif !image.blob.content_type.starts_with?('image/')
        image.purge
        self.errors.add(:image, 'Wrong format')
      end
    end
  end
end
