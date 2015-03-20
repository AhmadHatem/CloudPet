json.array!(@devices) do |device|
  json.extract! device, :id, :User_id, :Register_id
  json.url device_url(device, format: :json)
end
