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
      elsif !command.base_image_url.blank?
        image_tag command.base_image_url.gsub('assets/', ''),
                  style: 'max-width: 150px; height: auto;'
      else
        'No Image Found'
      end
    end
    column :person
    column :desc

    column :language
    actions
  end

  form do |command|
    row do
      col(sm: 3) { text_field :person }
      col(sm: 3) { text_field :desc }
    end

    row do
      col(sm: 3) { select :language, %w[ru zh en] }
    end

    row do
      col(sm: 3) { file_field :image, as: :file, input_html: { direct_upload: true } }
      unless command.base_image_url.blank?
        col(sm: 3) { image_tag command.base_image_url.gsub('assets/', ''),
                               style: 'max-width: 100%; height: auto;' }
      end
      if command.image.attached?
        col(sm: 3) { image_tag main_app.rails_blob_path(command.image),
                        style: 'max-width: 100%; height: auto;' }
      end
    end
    row do
      col(sm: 3) {}
      if command.image.attached? || !command.base_image_url.blank?
        col(sm: 3) { check_box :delete_file }
      end
    end
  end

  params do |params|
    params.require(:command).permit(:person, :image, :desc, :language, :delete_file, :base_image_url)
  end
end
