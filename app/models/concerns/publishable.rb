module Publishable
  extend ActiveSupport::Concern

  included do
    before_save :set_published_at

    scope :published, -> { where(published: true) }

    private
    def set_published_at
      self.published_at = Time.now.to_date if self.has_attribute?(:published_at) and self.published and self.published_at.nil?
    end
  end
end