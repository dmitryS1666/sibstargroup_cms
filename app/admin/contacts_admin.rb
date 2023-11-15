Trestle.resource(:contacts) do
  menu do
    item :contacts, icon: "fa fa-phone"
  end

  scope :all, default: true

  table do
    column :name
    column :title
    column :phone_num
    column :address
    column :person
    column :language
    actions
  end

  form do
    row do
      col { text_field :name }
      col { text_field :title }
    end

    row do
      col { text_field :phone_num }
      col { text_field :address }
    end

    row do
      col { text_field :person }
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
  #   params.require(:contact).permit(:name, ...)
  # end
end
