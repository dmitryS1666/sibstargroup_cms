module Metable
  extend ActiveSupport::Concern

  included do
    has_one :meta, as: :metable, class_name: 'PageMeta', dependent: :destroy
    accepts_nested_attributes_for :meta

    def meta_title
      meta.title if meta.present?
    end

    def meta_description
      meta.present? ? meta.description : Setting.meta_description
    end

    def meta_keywords
      meta.present? ? meta.keywords : Setting.meta_keywords
    end
  end
end