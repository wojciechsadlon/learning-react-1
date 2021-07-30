import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList } from '../../redux/columnsRedux';
import { addColumn } from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id === id);
  const listParams = filteredLists[0] || {};

  return ({
    ...listParams,
    columns: getColumnsForList(state, id),
    searchString: state.searchString,
  });
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(addColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);