class Command < ApplicationRecord
  has_one_attached :image
  before_save :remove_attach_img_by_flag

  validates :person, presence: { message: 'can\'t be empty' }
  validates :desc, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }

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
