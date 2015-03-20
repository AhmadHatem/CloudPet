class AddDateToPet < ActiveRecord::Migration
  def change
  	add_column :registers, :date_of_birth , :date
  end
end
