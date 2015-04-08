class Device < ActiveRecord::Base
  belongs_to :User
  belongs_to :Register
end
