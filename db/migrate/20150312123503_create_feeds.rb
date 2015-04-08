class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.string :body
      t.references :User, index: true

      t.timestamps null: false
    end
    add_foreign_key :feeds, :Users
  end
end
