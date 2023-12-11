Trestle.resource(:feedbacks) do
  menu do
    item :feedbacks, icon: "fa fa-first-order" #, priority: :second
  end

  remove_action :new, :edit, :destroy

  scopes do
    scope :all, default: true
  end

  table do
    column :name
    column :email
    column :message
    column :created_at, header: "Create Date" do |feedback|
      feedback.created_at.strftime("%Y-%m-%d")
    end
    actions do
      :show
    end
  end

  form do
    row do
      col(sm: 3) { text_field :name, disabled: true }
      col(sm: 3) { text_field :email, disabled: true }
    end
    row do
      col(sm: 3) { text_field :created_at, disabled: true }
      col(sm: 3) { text_area :message, disabled: true }
    end
  end
end
