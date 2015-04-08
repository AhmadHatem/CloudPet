#Feeding_scehdule_Model/Mohamed-Moubarak
class Event < ActiveRecord::Base
	extend SimpleCalendar
	has_calendar

  # Or set a custom attribute for simple_calendar to sort by
  # has_calendar :attribute => :your_starting_time_column_name
  	belongs_to :User
  	belongs_to :Register

	validates :pet_name , :amount, :starts_at , presence: true
	validates_datetime :starts_at , :on_or_after => :today
end
