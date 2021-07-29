import {connect} from 'react-redux';
import Info from './Info';

const mapStateToProps = state => ({
  image: state.listData.image,
  title: state.listData.title,
  lorem: state.app.lorem,
  info: state.settings.navLinksHeaders.info,
});

export default connect(mapStateToProps)(Info);