module Sortable
  extend ActiveSupport::Concern

  included do
    acts_as_list

    default_scope -> { order :position }
  end
end