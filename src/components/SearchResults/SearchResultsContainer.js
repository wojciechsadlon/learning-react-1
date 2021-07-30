import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const result = props.match.params.result;

  return ({
    cards: getCardsForSearchResults(state, result),
  });
};

export default connect(mapStateToProps)(SearchResults);