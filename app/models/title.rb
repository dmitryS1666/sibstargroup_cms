class Title < ApplicationRecord
  before_destroy :stop_destroy

  validates :name, presence: { message: 'can\'t be empty' }
  validates :title, presence: { message: 'can\'t be empty' }
  validates :language, presence: { message: 'should be selected' }

  def stop_destroy
    raise ActiveRecord::RecordNotDestroyed, 'Title cannot be deleted'
  end
end
