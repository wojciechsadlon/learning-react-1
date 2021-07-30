import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node.isRequired,
    lists: PropTypes.array.isRequired,
  }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;