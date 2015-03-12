class CreateRegisters < ActiveRecord::Migration
  def change
    create_table :registers do |t|
      t.string :name
      t.text :breed
      t.text :noo3
      t.text :gender

      t.timestamps null: false
    end
  end
end
