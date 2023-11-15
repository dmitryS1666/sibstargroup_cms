class CreateCoalGrades < ActiveRecord::Migration[7.0]
  def change
    create_table :coal_grades do |t|
      t.string :name

      t.timestamps
    end
  end
end
