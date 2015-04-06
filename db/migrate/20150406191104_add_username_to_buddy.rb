class AddUsernameToBuddy < ActiveRecord::Migration
  def change
  	add_column :buddies, :username, :string
  end
end
