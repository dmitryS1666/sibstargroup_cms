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
    column :created_at, header: "Create Date" do |order|
      order.created_at.strftime("%Y-%m-%d")
    end
    actions do
      :show
    end
  end

  form do |el|
    row do
      col(sm: 3) { text_field :coal_name, disabled: true }
      col(sm: 3) { text_field :basis_supply, disabled: true }
    end
    row do
      col(sm: 3) { text_field :delivery_direction, disabled: true }
      col(sm: 3) { text_field :destination_station, disabled: true }
      col(sm: 3) { text_field :count, disabled: true }
    end
    row do
      col(sm: 3) { text_field :name, disabled: true }
      col(sm: 3) { text_field :organization, disabled: true }
    end
    row do
      col(sm: 3) { text_field :price, disabled: true }
    end
    row do
      col(sm: 3) { text_field :email, disabled: true }
      col(sm: 3) { text_field :phone, disabled: true }
    end
    row do
      col(sm: 3) { text_field :message, disabled: true }
      col(sm: 3) { text_field :created_at, disabled: true }
    end
  end
end
