Trestle.resource(:navigations) do
  menu do
    item :navigations, icon: 'fa fa-globe', group: :general_configuration
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { Navigation.where(language: "ru") }
    scope :en, -> { Navigation.where(language: "en") }
    scope :zh, -> { Navigation.where(language: "zh") }
  end

  table do
    column :name
    column :title
    column :url
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
      col(sm: 3) { text_field :url }
      col(sm: 3) { select :language, %w[ru zh en] }
    end
  end
end
