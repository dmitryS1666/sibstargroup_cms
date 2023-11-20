class SupplyBasis < ApplicationRecord
  before_destroy :stop_destroy

  def stop_destroy
    raise ActiveRecord::RecordNotDestroyed, 'SupplyBasis cannot be deleted'
  end
end
