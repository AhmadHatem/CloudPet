json.array!(@buddies) do |buddy|
  json.extract! buddy, :id, :user_id, :register_id, :can_feed, :can_schedule
  json.url buddy_url(buddy, format: :json)
end
