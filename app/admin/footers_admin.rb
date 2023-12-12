Trestle.resource(:footers) do
  menu do
    item :footers, icon: "fa fa-star", group: :general_configuration
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { Footer.where(language: "ru") }
    scope :en, -> { Footer.where(language: "en") }
    scope :zh, -> { Footer.where(language: "zh") }
  end

  table do
    column :name
    column :title
    column :language, align: :center
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
      col(sm: 6) { text_area :title }
    end
  end
end
