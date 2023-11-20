class User < ApplicationRecord
  include Trestle::Auth::ModelMethods
  include Trestle::Auth::ModelMethods::Rememberable

  before_destroy :stop_destroy

  def stop_destroy
    raise ActiveRecord::RecordNotDestroyed, 'User cannot be deleted'
  end
end
