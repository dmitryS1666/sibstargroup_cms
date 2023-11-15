Trestle.resource(:navigation_pages) do
  menu do
    item :navigation_pages, icon: 'fa fa-map-marker', group: :general_configuration
  end

  table do
    column :name
    column :title
    column :anchor
    column :language
    actions
  end

  form do
    row do
      col { text_field :name }
      col { text_field :title }
    end
    row do
      col { text_field :anchor }
      col { select :language, %w[ru zh en] }
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
  #   params.require(:navigation_page).permit(:name, ...)
  # end
end
