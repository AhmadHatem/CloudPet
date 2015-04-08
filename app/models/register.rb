class Register < ActiveRecord::Base
  	
belongs_to :User
has_many :buddies
has_many :events


  	has_attached_file :image, styles: { large: "300x300>", thumb: "100x100>"}
  	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  	validates :name, :species , :breed, :gender , presence: true

 def save_pet
  render new_buddy_path
end

end
