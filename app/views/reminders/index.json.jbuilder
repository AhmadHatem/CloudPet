json.array!(@reminders) do |reminder|
  json.extract! reminder, :id, :body, :due_date, :User_id
  json.url reminder_url(reminder, format: :json)
end
