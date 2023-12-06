Trestle.resource(:titles) do
  menu do
    item :titles, icon: "fa fa-star", group: :general_configuration
  end

  scopes do
    scope :all, default: true
    scope :ru_main, -> { Title.where(language: "ru", page: 'main') }
    scope :en_main, -> { Title.where(language: "en", page: 'main') }
    scope :zh_main, -> { Title.where(language: "zh", page: 'main') }
    scope :ru_about, -> { Title.where(language: "ru", page: 'about') }
    scope :en_about, -> { Title.where(language: "en", page: 'about') }
    scope :zh_about, -> { Title.where(language: "zh", page: 'about') }
    scope :ru_sales, -> { Title.where(language: "ru", page: 'sales') }
    scope :en_sales, -> { Title.where(language: "en", page: 'sales') }
    scope :zh_sales, -> { Title.where(language: "zh", page: 'sales') }
  end

  scope :all, default: true

  table do
    column :name
    column :title
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
      col(sm: 3) { select :language, %w[ru zh en] }
    end
  end
end
