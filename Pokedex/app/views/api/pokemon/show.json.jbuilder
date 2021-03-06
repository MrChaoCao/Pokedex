result = []
@pokemon.items.each do |item|
  result << item.id
end

json.pokemon do
  json.id @pokemon.id
  json.name @pokemon.name
  json.attack @pokemon.attack
  json.defense @pokemon.defense
  json.moves @pokemon.moves
  json.poke_type @pokemon.poke_type
  json.image_url asset_path(@pokemon.image_url)
  json.item_ids result
end

json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.id item.id
      json.name item.name
      json.pokemon_id item.pokemon_id
      json.price item.price
      json.happiness item.happiness
      json.image_url asset_path(item.image_url)
    end
  end
end
