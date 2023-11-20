Trestle.resource(:news) do
  menu do
    item :news, icon: "fa fa-newspaper-o"
  end

  scopes do
    scope :all, default: true
    scope :ru, -> { News.where(language: "ru") }
    scope :en, -> { News.where(language: "en") }
    scope :zh, -> { News.where(language: "zh") }
  end

  table do
    column :title
    column :content
    column :image do |slide|
      if slide.image.attached?
        image_tag main_app.rails_blob_path(slide.image),
                  style: 'max-width: 150px; height: auto;'
      else
        'No Image Found'
      end
    end

    column :language
    actions header: 'Actions' do |a|
      a.edit
      a.delete
    end
  end

  form do |news|
    row do
      col(sm: 3) { text_field :title }
      col(sm: 3) { select :language, %w[ru zh en] }
    end
    row do
      col(sm: 3) { file_field :image, as: :file, input_html: { direct_upload: true } }
      if news.image.attached?
        col(sm: 3) {
          image_tag main_app.rails_blob_path(news.image),
                    style: 'max-width: 100%; height: auto;'
        }
      end
    end
    row do
      col(sm: 3) {}
      if news.image.attached?
        # col(sm: 3) { select :delete_file, %w[true false] }
        col(sm: 3) { check_box :delete_file }
      end
    end

    row do
      col(sm: 9) { editor :content }
    end
  end
end
