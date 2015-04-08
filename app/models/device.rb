class Truck #< ActiveRecord::Base
 #Author Mohamed Attwa
 #yet to show if it is taken or not <--- 
  belongs_to :User

  validates :name, presence: true
  validates :serial, presence: true, numericality: true
  
end
