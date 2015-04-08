class Repeat < ActiveRecord::Migration
  def change
  		add_column :reminders, :Repeat, :datetime
  end
end
