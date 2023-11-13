class NavigationPage < ApplicationRecord

  private

  def self.items
    where(language: I18n.locale)
      .as_json(only: [:name, :title, :anchor])
      .group_by { |e| e['name'] }
  end
end
