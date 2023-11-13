module Onmainable
  extend ActiveSupport::Concern

  included do

    scope :onmain, -> { where(onmain: true) }

  end
end