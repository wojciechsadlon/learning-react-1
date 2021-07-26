import {connect} from 'react-redux';
import Column from './Column';
import { getCardsForColumn } from '../../redux/cardsRedux';
import { addCard } from '../../redux/cardsRedux';

// export const createActionAddCard = ({cards}, listId) => cards.filter(card => card.columnId === listId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(addCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);