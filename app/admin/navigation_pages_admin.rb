Trestle.resource(:navigation_pages) do
  menu do
    item :navigation_pages, icon: 'fa fa-map-marker', group: :general_configuration
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { NavigationPage.where(language: "ru") }
    scope :en, -> { NavigationPage.where(language: "en") }
    scope :zh, -> { NavigationPage.where(language: "zh") }
  end

  table do
    column :name
    column :title
    column :anchor
    column :language
    actions
  end

  form do |el|
    row do
      if el&.name
        col(sm: 3) { text_field :name, disabled: true }
      else
        col(sm: 3) { text_field :name }
      end
      col(sm: 3) { text_field :title }
    end
    row do
      col(sm: 3) { text_field :anchor }
      col(sm: 3) { select :language, %w[ru zh en] }
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
