Trestle.resource(:coal_grade_items) do
  menu do
    item :coal_grade_items, icon: "fa fa-sitemap"
  end

  scopes do
    scope :all, default: true
    scope :dpk, -> { CoalGradeItem.where(coal_grade_id: CoalGrade.where(name: 'DPK').first.id) }
    scope :do, -> { CoalGradeItem.where(coal_grade_id: CoalGrade.where(name: 'DO').first.id) }
    scope :domssh, -> { CoalGradeItem.where(coal_grade_id: CoalGrade.where(name: 'DOMSSH').first.id) }
    scope :low_vol_pci, -> { CoalGradeItem.where(coal_grade_id: CoalGrade.where(name: 'LOW VOL PCI').first.id) }
    scope :tomssh, -> { CoalGradeItem.where(coal_grade_id: CoalGrade.where(name: 'TOMSSH').first.id) }
  end

  table do
    # sortable false

    column :name
    column :value
    column :coal_grade
    actions
  end

  form do |coal_grade_item|
    row do
      col { text_field :name }
      col { text_field :value }
    end
    row do
      col { text_field :coal_grade }
      col {  }
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
  #   params.require(:coal_grade_item).permit(:name, ...)
  # end
end
