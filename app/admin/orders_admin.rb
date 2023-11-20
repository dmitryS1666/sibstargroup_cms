Trestle.resource(:orders) do
  menu do
    item :orders, icon: "fa fa-first-order", priority: :first
  end

  remove_action :new, :edit, :destroy

  scopes do
    scope :all, default: true
  end

  table do
    column :coal_name
    column :basis_supply
    column :delivery_direction
    column :destination_station
    column :count
    column :name
    column :organization
    column :email
    column :price
    column :phone
    column :message
    actions do
      :show
    end
  end

  # form do |el|
  #   row do
  #     if el&.name
  #       col(sm: 3) { text_field :name, disabled: true }
  #     else
  #       col(sm: 3) { text_field :name }
  #     end
  #     col(sm: 3) { select :language, %w[ru zh en] }
  #   end
  #   row do
  #     col { editor :text }
  #   end
  # end
end
