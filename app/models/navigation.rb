class Navigation < ApplicationRecord
  validates :name, presence: { message: 'can\'t be empty' }
  validates :title, presence: { message: 'can\'t be empty' }
  validates :url, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }

  private

  def self.items
    where(language: I18n.locale)
      .as_json(only: [:name, :title, :url])
      .group_by { |e| e['name'] }
  end
end
