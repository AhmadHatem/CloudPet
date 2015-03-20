json.array!(@feeds) do |feed|
  json.extract! feed, :id, :body, :User_id
  json.url feed_url(feed, format: :json)
end
