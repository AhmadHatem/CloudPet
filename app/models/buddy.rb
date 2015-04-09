class Buddy < ActiveRecord::Base
  belongs_to :user
  belongs_to :register
<<<<<<< HEAD
  validates :user, :register, presence: true

=======
>>>>>>> master
end
