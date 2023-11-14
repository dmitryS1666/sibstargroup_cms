Trestle.resource(:news) do
  menu do
    item :news, icon: "fa fa-newspaper-o"
  end

  scope :all, default: true

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
    actions
  end

  form do |news|
    row do
      col { text_field :title }
    end
    row do
      col { editor :content }
    end

    col { file_field :image, as: :file, input_html: { direct_upload: true } }

    row do
      if news.image.attached?
        col { image_tag main_app.rails_blob_path(news.image),
                        style: 'max-width: 150px; height: auto;' }
      end
      col {}
    end
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:news).permit(:name, ...)
  # end
end
