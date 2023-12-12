Trestle.resource(:generals) do
  menu do
    item :generals, icon: "fa fa-star", group: :general_configuration
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { General.where(language: "ru") }
    scope :en, -> { General.where(language: "en") }
    scope :zh, -> { General.where(language: "zh") }
  end

  table do
    column :name
    column :text
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
      col(sm: 3) { select :language, %w[ru zh en] }
    end
    row do
      col(sm: 6) { text_area :text }
    end
  end
end
