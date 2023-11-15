Trestle.resource(:cookie_elements) do
  menu do
    item :cookie_elements, icon: "fa fa-cog", group: :general_configuration
  end

  table do
    column :title
    column :btn
    column :language
    actions
  end

  form do
    row do
      col { text_field :title }
      col {}
    end

    row do
      col { text_field :btn }
      col {}
    end

    row do
      col { select :language, %w[ru zh en] }
      col {}
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
  #   params.require(:cooky).permit(:name, ...)
  # end
end
