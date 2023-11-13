class Contact < ApplicationRecord

  private

  def self.items
    where(language: I18n.locale)
      .as_json(only: [:name, :title, :person, :address, :phone_num])
      .group_by { |e| e['name'] }
  end
end
