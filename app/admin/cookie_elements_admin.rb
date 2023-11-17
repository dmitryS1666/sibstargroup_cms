Trestle.resource(:cookie_elements) do
  menu do
    item :cookie_elements, icon: "fa fa-cog", group: :general_configuration
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { CookieElement.where(language: "ru") }
    scope :en, -> { CookieElement.where(language: "en") }
    scope :zh, -> { CookieElement.where(language: "zh") }
  end

  table do
    column :title
    column :btn
    column :language
    actions
  end

  form do
    row do
      col(sm: 6) { text_field :title }
    end

    row do
      col(sm: 6) { text_field :btn }
    end

    row do
      col(sm: 6) { select :language, %w[ru zh en] }
    end
  end
end
