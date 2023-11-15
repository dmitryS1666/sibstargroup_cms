class CreateCoalGradeItems < ActiveRecord::Migration[7.0]
  def change
    create_table :coal_grade_items do |t|
      t.string :name
      t.string :value
      t.references :coal_grade, null: false, foreign_key: true

      t.timestamps
    end
  end
end
