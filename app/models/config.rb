class Config < ApplicationRecord
  before_destroy :stop_destroy

  validates :name, presence: { message: 'can\'t be empty' }
  validates :value, presence: { message: 'can\'t be empty' }

  def stop_destroy
    raise ActiveRecord::RecordNotDestroyed, 'Config cannot be deleted'
  end
end
