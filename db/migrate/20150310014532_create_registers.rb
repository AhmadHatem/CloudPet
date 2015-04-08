class CreateRegisters < ActiveRecord::Migration
  def change
    create_table :registers do |t|
      t.string :name
      t.text :breed
      t.text :species
      t.text :gender
      t.references :User, index: true

  


      t.timestamps null: false
    end
  end
end
