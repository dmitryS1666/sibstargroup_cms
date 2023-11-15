Trestle.resource(:buttons) do
  menu :buttons, icon: "fa fa-keyboard-o", group: :general_configuration

  scope :all, default: true

  table do
    column :name
    column :title
    column :language, align: :center
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
  #   params.require(:button).permit(:name, ...)
  # end
end
