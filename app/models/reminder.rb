class Reminder < ActiveRecord::Base
  belongs_to :User
  validates :body , :due_date , presence: true
  validates_datetime :due_date , :on_or_after => :today
end
