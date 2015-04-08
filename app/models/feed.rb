class Feed < ActiveRecord::Base
  belongs_to :User
  validates :body, presence: true
end
