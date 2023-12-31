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
                  style: 'max-width: 250px; height: auto;'
      elsif !slide.base_image_url.blank?
        image_tag slide.base_image_url.gsub('/assets/', ''),
                  style: 'max-width: 250px; height: auto;'
      else
        'No Image Found'
      end
    end
    column :text

    column :language
    actions
  end

  form do |slider|
    row do
      col(sm: 6) { text_area :text }
      col(sm: 3) { select :language, %w[ru zh en] }
    end

    row do
      col(sm: 3) {
        file_field :image, as: :file, direct_upload: true, accept: "image/png, image/gif, image/jpeg"
      }
      if slider.image.attached?
        col(sm: 3) { image_tag main_app.rails_blob_path(slider.image),
                               style: 'max-width: 100%; height: auto;' }
      elsif !slider.base_image_url.blank?
        col(sm: 3) { image_tag slider.base_image_url.gsub('/assets/', ''),
                               style: 'max-width: 100%; height: auto;' }
      end
    end
    row do
      col(sm: 3) {}
      if slider.image.attached? || !slider.base_image_url.blank?
        col(sm: 3) { check_box :delete_file, class: 'dangerous-area' }
      end
    end
  end

  params do |params|
    params.require(:slider).permit(:text, :image, :base_image_url, :language, :delete_file)
  end
end
