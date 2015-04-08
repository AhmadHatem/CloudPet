class AddAttachmentImageToRegisters < ActiveRecord::Migration
  def self.up
    change_table :registers do |t|
      t.attachment :image
      
    end
  end

  def self.down
    remove_attachment :registers, :image
  end

end
