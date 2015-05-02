
#Feeding_scehdule_table/Mohamed-Moubarak
class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :pet_name
      t.integer :amount
      t.date :starts_at
      t.date :ends_at
      t.time :time
      t.references :User, index: true

      t.references :Register, index: true

      t.timestamps null: false
    end 
      add_foreign_key :events, :Users

      add_foreign_key :events, :Registers
  end
end
