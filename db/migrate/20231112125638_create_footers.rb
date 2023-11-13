class CreateFooters < ActiveRecord::Migration[7.0]
  def change
    create_table :footers do |t|
      t.string :name
      t.string :title

      t.string :language

      t.timestamps
    end
  end
end
