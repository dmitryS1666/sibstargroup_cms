class NavigationPage < ApplicationRecord
  before_destroy :stop_destroy

  validates :name, presence: { message: 'can\'t be empty' }
  validates :title, presence: { message: 'can\'t be empty' }
  validates :anchor, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }

  def stop_destroy
    raise ActiveRecord::RecordNotDestroyed, 'NavigationPage cannot be deleted'
  end

  private
  def self.items
    where(language: I18n.locale)
      .as_json(only: [:name, :title, :anchor])
      .group_by { |e| e['name'] }
  end
end
