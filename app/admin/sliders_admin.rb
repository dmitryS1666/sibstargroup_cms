Trestle.resource(:sliders) do

  menu do
    item :sliders, icon: "fa fa-picture-o"
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { Slider.where(language: "ru") }
    scope :en, -> { Slider.where(language: "en") }
    scope :zh, -> { Slider.where(language: "zh") }
  end

  scope :all, default: true

  table do
    column :image do |slide|
      if slide.image.attached?
        image_tag main_app.rails_blob_path(slide.image),
                  style: 'max-width: 150px; height: auto;'
      else
        'No Image Found'
      end
    end
    column :text
    column :base_image_url

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

  form do |slider|
    row do
      col(sm: 6) { editor :text }
      col(sm: 6) { file_field :image, as: :file, input_html: { direct_upload: true } }
    end

    row do
      col(sm: 6) { text_field :base_image_url, disabled: true }
      col(sm: 6) { select :language, %w[ru zh en] }
    end

    row do
      if slider.base_image_url
        col(sm: 6) { image_tag slider.base_image_url.gsub('assets/', ''),
                        style: 'max-width: 350px; height: auto;' }
      end
      if slider.image.attached?
        col(sm: 6) { image_tag main_app.rails_blob_path(slider.image),
                        style: 'max-width: 150px; height: auto;' }
      end
    end
  end

  params do |params|
    params.require(:slider).permit(:text, :image, :base_image_url, :language)
  end
end
