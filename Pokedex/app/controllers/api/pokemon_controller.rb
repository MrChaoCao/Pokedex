class Api::PokemonController < ApplicationController
  def show
    @pokemon = Pokemon.includes(:items).find_by(id: params[:id])
  end

  def index
    @pokemons = Pokemon.all.includes(:items)
  end

  def create
  end

  def destroy

  end

  def update
  end
end
