Trestle.resource(:coal_grade_items) do
  menu do
    item :coal_grade_items, icon: "fa fa-sitemap", group: :general_information
  end

  table do
    # sortable false

    column :name
    column :value
    column :coal_grade
    actions
  end

  form do |coal_grade_item|
    row do
      col { text_field :name }
      col { text_field :value }
    end
    row do
      col { text_field :coal_grade }
      col {  }
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
  #   params.require(:coal_grade_item).permit(:name, ...)
  # end
end
