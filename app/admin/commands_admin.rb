Trestle.resource(:commands) do
  menu do
    item :commands, icon: "fa fa-users"
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { Command.where(language: "ru") }
    scope :en, -> { Command.where(language: "en") }
    scope :zh, -> { Command.where(language: "zh") }
  end

  table do
    column :image do |command|
      if command.image.attached?
        image_tag main_app.rails_blob_path(command.image),
                  style: 'max-width: 150px; height: auto;'
      else
        'No Image Found'
      end
    end
    column :person
    column :desc

    column :base_image_url do |img|
      if img
        image_tag img.base_image_url.gsub('assets/', ''),
                  style: 'max-width: 150px; height: auto;'
      else
        'No Image Found'
      end
    end

    column :language
    actions
  end

  form do |command|
    row do
      col(sm: 6) { text_field :person }
      col(sm: 6) { text_field :desc }
    end

    row do
      col(sm: 6) { file_field :image, as: :file, input_html: { direct_upload: true } }
      col(sm: 6) { text_field :base_image_url, disabled: true }
    end

    row do
      col(sm: 6) { select :language, %w[ru zh en] }
    end

    row do
      if command.base_image_url
        col(sm: 6) { image_tag command.base_image_url.gsub('assets/', ''),
                        style: 'max-width: 350px; height: auto;' }
      end
      if command.image.attached?
        col(sm: 6) { image_tag main_app.rails_blob_path(command.image),
                        style: 'max-width: 150px; height: auto;' }
      end
    end
  end

  params do |params|
    params.require(:command).permit(:person, :image, :desc, :language)
  end
end
