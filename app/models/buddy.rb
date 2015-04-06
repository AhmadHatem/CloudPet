class Buddy < ActiveRecord::Base
  belongs_to :user
  belongs_to :register
end
