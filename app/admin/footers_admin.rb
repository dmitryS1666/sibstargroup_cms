Trestle.resource(:footers) do
  menu do
    item :footers, icon: "fa fa-star"
  end

  # Customize the table columns shown on the index view.
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
      col {}
    end
    editor :title

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
  #   params.require(:footer).permit(:name, ...)
  # end
end
