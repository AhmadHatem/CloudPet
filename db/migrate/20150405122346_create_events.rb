class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :pet_name
      t.integer :amount
      t.datetime :starts_at

      t.references :User, index: true
      t.references :Register, index: true

      t.timestamps null: false
    end
      add_foreign_key :events, :Users
      add_foreign_key :events, :Registers
  end
end
