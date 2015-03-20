class CreateReminders < ActiveRecord::Migration
  def change
    create_table :reminders do |t|
      t.string :body
      t.date :due_date
      t.references :User, index: true

      t.timestamps null: false
    end
    add_foreign_key :reminders, :Users
  end
end
