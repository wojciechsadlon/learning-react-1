import {connect} from 'react-redux';
import FAQ from './FAQ';

const mapStateToProps = state => ({
  image: state.listData.image,
  title: state.listData.title,
  lorem: state.app.lorem,
  subtitle: state.settings.faqSubtitle,
});

export default connect(mapStateToProps)(FAQ);