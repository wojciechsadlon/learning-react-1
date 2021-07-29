import {connect} from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  headerIcon: state.settings.headerIcon,
  home: state.settings.navLinksHeaders.home,
  faq: state.settings.navLinksHeaders.faq,
  info: state.settings.navLinksHeaders.info,
});

export default connect(mapStateToProps)(Header);