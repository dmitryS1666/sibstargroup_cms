class CookieElement < ApplicationRecord
  before_destroy :stop_destroy

  validates :title, presence: { message: 'can\'t be empty' }
  validates :btn, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }

  def stop_destroy
    raise ActiveRecord::RecordNotDestroyed, 'NavigationPage cannot be deleted'
  end
end
