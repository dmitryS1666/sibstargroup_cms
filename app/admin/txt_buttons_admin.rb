Trestle.resource(:txt_buttons, model: TxtButton) do
  menu do
    item :txt_buttons, icon: "fa fa-keyboard-o", group: :general_configuration
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { TxtButton.where(language: "ru") }
    scope :en, -> { TxtButton.where(language: "en") }
    scope :zh, -> { TxtButton.where(language: "zh") }
  end

  table do
    column :name
    column :title
    column :language, align: :center
    actions
  end

  form do
    row do
      col(sm: 6) { text_field :name }
    end
    row do
      col(sm: 6) { text_field :title }
    end
    row do
      col(sm: 6) { select :language, %w[ru zh en] }
    end
  end
end
