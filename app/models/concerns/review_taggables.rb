module ReviewTaggables
  extend ActiveSupport::Concern

  included do
    has_many :review_taggables, as: :taggable, dependent: :destroy
    has_many :review_tags, through: :review_taggables

    def tags_captions= tags_captions
      return if tags_captions == self.tags_captions

      self.review_tags.destroy_all

      tags_captions = tags_captions.split(',').map(&:strip).uniq
      tags_captions.each do |tag_caption|
        self.review_tags << ReviewTag.find_or_create_by(caption: tag_caption)
      end
    end

    def tags_captions
      self.review_tags.map(&:caption).join ', '
    end

    def tags_array
      self.review_tags.map{|item| item.caption}.to_json
    end

  end
end