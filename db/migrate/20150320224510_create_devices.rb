class CreateDevices < ActiveRecord::Migration
  def change
    create_table :devices do |t|
      t.references :User, index: true
      t.references :Register, index: true

      t.timestamps null: false
    end
    add_foreign_key :devices, :Users
    add_foreign_key :devices, :Registers
  end
end
