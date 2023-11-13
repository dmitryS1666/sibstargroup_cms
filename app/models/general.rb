class General < ApplicationRecord
  private

  def self.items
    where(language: I18n.locale)
      .as_json(only: [:name, :text])
      .group_by { |e| e['name'] }
  end
end
