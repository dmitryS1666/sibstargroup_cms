Trestle.resource(:feedbacks) do
  menu do
    item :feedbacks, icon: "fa fa-first-order"#, priority: :second
  end

  remove_action :new, :edit, :destroy

  scopes do
    scope :all, default: true
  end

  table do
    column :name
    column :email
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
