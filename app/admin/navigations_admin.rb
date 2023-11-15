Trestle.resource(:navigations) do
  menu do
    item :navigations, icon: 'fa fa-globe', group: :general_configuration
  end

  scope :all, default: true

  table do
    column :name
    column :title
    column :url
    column :language
    actions
  end

  form do

    row do
      col { text_field :name }
      col {}
    end

    row do
      col { text_field :title }
      col {}
    end

    row do
      col { text_field :url }
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
  #   params.require(:navigation).permit(:name, ...)
  # end
end
