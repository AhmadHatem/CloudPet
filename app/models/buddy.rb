class Buddy < ActiveRecord::Base
  belongs_to :user
  belongs_to :register
  validates :user, :register, presence: true

end
