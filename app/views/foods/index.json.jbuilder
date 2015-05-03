json.array!(@foods) do |food|
  json.extract! food, :id, :weight, :leftovers, :ate, :date, :time, :User_id, :Register_id
  json.url food_url(food, format: :json)
end
