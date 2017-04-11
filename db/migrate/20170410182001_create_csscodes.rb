class CreateCsscodes < ActiveRecord::Migration[5.0]
  def change
    create_table :csscodes do |t|
      t.string :code
      t.belongs_to :page, index: true

      t.timestamps
    end
  end
end
