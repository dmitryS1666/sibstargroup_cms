module ArticleTaggables
  extend ActiveSupport::Concern

  included do
    has_many :article_taggables, as: :taggable, dependent: :destroy
    has_many :article_tags, through: :article_taggables

    def tags_captions= tags_captions
      return if tags_captions == self.tags_captions

      self.article_tags.destroy_all

      tags_captions = tags_captions.split(',').map(&:strip).uniq
      tags_captions.each do |tag_caption|
        self.article_tags << ArticleTag.find_or_create_by(caption: tag_caption)
      end
    end

    def tags_captions
      self.article_tags.map(&:caption).join ', '
    end

    def tags_array
      self.article_tags.map{|item| item.caption}.to_json
    end

  end
end