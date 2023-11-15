Trestle.resource(:generals) do
  menu do
    item :generals, icon: "fa fa-star", group: :general_configuration
  end

  table do
    column :name
    column :text
    column :language
    actions
  end

  form do
    row do
      col { text_field :name }
      col { select :language, %w[ru zh en] }
    end
    row do
      col { editor :text }
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
  #   params.require(:general).permit(:name, ...)
  # end
end
