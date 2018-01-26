import {connect} from 'react-redux';
import {selectPokemon} from '../../reducers/selectors';
import {requestPokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownprops) => ({
  pokemon: selectPokemon(state, ownprops.match.params.pokemonId)

});

const mapDispatchToProps = dispatch => ({
  requestPokemon: () => dispatch(requestPokemon()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
