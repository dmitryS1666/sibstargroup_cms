Trestle.resource(:coal_grades) do
  menu do
    item :coal_grades, icon: "fa fa-rocket"
  end

  scopes do
    scope :all, default: true
  end

  table do
    column :name
    actions
  end

  form do |coal_grade|
    text_field :name
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:coal_grade).permit(:name, ...)
  # end
end
