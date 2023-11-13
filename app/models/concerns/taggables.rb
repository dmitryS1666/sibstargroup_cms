module Taggables
  extend ActiveSupport::Concern

  included do
    has_many :taggables, as: :taggable, dependent: :destroy
    has_many :services, through: :taggables

    def services_tags= services_tags
      return if services_tags == self.services_tags

      self.services.destroy_all

      services_tags = services_tags.split(',').map(&:strip).uniq
      services_tags.each do |service_value|
        self.services << Service.find_by(id: service_value)
      end
    end

    def services_tags
      self.services.map(&:id).join ','
    end
    def services_captions
      self.services.map(&:caption).join ', '
    end

    def services_array
      self.services.map{|item| {"value"=>item.id, "label"=>item.caption}}.to_json
    end



  end
end