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
