class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def self.items
    where(language: I18n.locale)
      .as_json(only: [:name, :title])
      .group_by { |e| e['name'] }
  end
end
