import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    image: PropTypes.string,
  }
  static defaultProps = {
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  }
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Things to do', <sup key='1'>soon!</sup>]} image={this.props.image}>
        </List>
      </main>
    )
  }
}

export default App;