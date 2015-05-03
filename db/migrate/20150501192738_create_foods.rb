class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.integer :weight
      t.integer :leftovers
      t.integer :ate
      t.date :date
      t.time :time
      t.references :User, index: true
      t.references :Register, index: true

      t.timestamps null: false
    end
    add_foreign_key :foods, :Users
    add_foreign_key :foods, :Registers
  end
end
