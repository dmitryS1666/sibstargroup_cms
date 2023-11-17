Trestle.resource(:coal_grades) do
  menu do
    item :coal_grades, icon: "fa fa-rocket"
  end

  scopes do
    scope :all, default: true
  end

  table do
    column :name
    actions
  end

  form do
    row do
      col(sm: 6) { text_field :name }
    end
  end
end
