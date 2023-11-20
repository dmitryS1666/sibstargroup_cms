Trestle.resource(:contacts) do
  menu do
    item :contacts, icon: "fa fa-phone", group: :general_configuration
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { Contact.where(language: "ru") }
    scope :en, -> { Contact.where(language: "en") }
    scope :zh, -> { Contact.where(language: "zh") }
  end

  table do
    column :name
    column :title
    column :phone_num
    column :address
    column :person
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
      col(sm: 3) { text_field :phone_num }
      col(sm: 3) { text_field :address }
    end

    row do
      col(sm: 3) { text_field :person }
      col(sm: 3) { select :language, %w[ru zh en] }
    end
  end
end
