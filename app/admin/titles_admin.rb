Trestle.resource(:titles) do
  menu do
    item :titles, icon: "fa fa-star", group: :general_configuration
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { Title.where(language: "ru") }
    scope :en, -> { Title.where(language: "en") }
    scope :zh, -> { Title.where(language: "zh") }
  end

  scope :all, default: true

  table do
    column :name
    column :title
    column :language
    actions
  end

  # |title|
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
  #   params.require(:title).permit(:name, ...)
  # end
end
