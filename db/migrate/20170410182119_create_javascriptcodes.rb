class CreateJavascriptcodes < ActiveRecord::Migration[5.0]
  def change
    create_table :javascriptcodes do |t|
      t.string :code

      t.timestamps
    end
  end
end
