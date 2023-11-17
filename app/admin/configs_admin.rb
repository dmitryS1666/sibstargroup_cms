Trestle.resource(:configs) do
  menu do
    item :configs, icon: "fa fa-cog", group: :general_configuration
  end

  table do
    column :name
    column :value
    actions
  end

  form do
    row do
      col(sm: 3) { text_field :name }
      col(sm: 3) { text_field :value }
    end
  end
end
