class CreateBuddies < ActiveRecord::Migration
  def change
    create_table :buddies do |t|
      t.references :user, index: true
      t.references :register, index: true
      t.boolean :can_feed
      t.boolean :can_schedule

      t.timestamps null: false
    end
    add_foreign_key :buddies, :users
    add_foreign_key :buddies, :registers
  end
end
