class AddDeleteImageToCoalGrade < ActiveRecord::Migration[7.0]
  def change
    add_column :coal_grades, :delete_file, :boolean
  end
end
