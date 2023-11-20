Trestle.resource(:coal_grade_items) do
  menu do
    # item 'Dashboard', '/admin/home/index', icon: 'fa fa-home', priority: :first # Замените '/admin/dashboard' на путь к вашей кастомной странице
    item :coal_grade_items, icon: "fa fa-sitemap"
  end

  # menu do
  # end

  scopes do
    scope :all, default: true
    CoalGrade.distinct.pluck(:id, :name).each do |coal|
      scope coal[1], -> { CoalGradeItem.where(coal_grade_id: coal[0]) }
    end
  end

  table do |item|
    column :name
    column :value
    column :coal_grade_id, ->(item) { CoalGrade.find(item.coal_grade_id).name }
    actions
  end

  form do |item|
    row do
      col(sm: 3) { text_field :name }
      col(sm: 3) { text_field :value }
    end
    row do
      col(sm: 3) { select :coal_grade_id, CoalGrade.all.map { |coal| [coal.name, coal.id, { selected: (coal.id == item.coal_grade_id) }] } }
    end
  end

  # params do |params|
  #   params.require(:coal_grade_item).permit(:name, ...)
  # end
end
