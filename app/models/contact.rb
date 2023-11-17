class Contact < ApplicationRecord
  validates :name, presence: { message: 'can\'t be empty' }
  validates :title, presence: { message: 'can\'t be empty' }
  validates :address, presence: { message: 'can\'t be empty' }
  validates :phone_num, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }

  private

  def self.items
    where(language: I18n.locale)
      .as_json(only: [:name, :title, :person, :address, :phone_num])
      .group_by { |e| e['name'] }
  end
end
