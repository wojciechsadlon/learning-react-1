import React from 'react';
import styles from './Header.scss';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    headerIcon: PropTypes.string,
    home: PropTypes.string,
    faq: PropTypes.string,
    info: PropTypes.string,
  }
  render() {
    const {headerIcon, home, faq, info} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={headerIcon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{home}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{info}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{faq}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}


export default Header;