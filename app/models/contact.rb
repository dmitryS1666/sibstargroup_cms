class Contact < ApplicationRecord
  before_destroy :stop_destroy

  validates :name, presence: { message: 'can\'t be empty' }
  validates :title, presence: { message: 'can\'t be empty' }
  validates :address, presence: { message: 'can\'t be empty' }
  validates :phone_num, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }

  def stop_destroy
    raise ActiveRecord::RecordNotDestroyed, 'Contact cannot be deleted'
  end

  private

  def self.items
    where(language: I18n.locale)
      .as_json(only: [:name, :title, :person, :address, :phone_num])
      .group_by { |e| e['name'] }
  end
end
