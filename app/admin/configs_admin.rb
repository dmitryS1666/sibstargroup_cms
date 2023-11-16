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
      col { text_field :name }
      col { text_field :value }
    end
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:slider_config).permit(:name, ...)
  # end
end
