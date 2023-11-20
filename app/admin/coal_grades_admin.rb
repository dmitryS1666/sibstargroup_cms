Trestle.resource(:coal_grades) do
  menu do
    item :coal_grades, icon: "fa fa-rocket"
  end

  scopes do
    scope :all, default: true
  end

  table do
    column :name
    actions
  end

  form do |coal|
    row do
      col(sm: 6) { text_field :name }
    end
    row do
      col(sm: 6) { file_field :pdf_file, as: :file, input_html: { direct_upload: true } }
    end
    row do
      if coal.pdf_file.attached?
        col(sm: 3) {
          link_to "#{coal.name}.pdf", main_app.rails_blob_path(coal.pdf_file),
                  style: 'max-width: 150px; height: auto;'
        }
      end
    end
    row do
      if coal.pdf_file.attached?
        col(sm: 3) { check_box :delete_file }
      end
    end
  end
end
