json.array!(@events) do |event|
  json.extract! event, :id, :pet_name, :amount, :starts_at
  json.url event_url(event, format: :json)
end
