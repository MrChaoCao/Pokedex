json.array! @guests do |guest|
  json.extract! guest, :name
end
