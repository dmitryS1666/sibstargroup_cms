class Navigation < ApplicationRecord

  private

  def self.items
    where(language: I18n.locale)
      .as_json(only: [:name, :title, :url])
      .group_by { |e| e['name'] }
  end
end
