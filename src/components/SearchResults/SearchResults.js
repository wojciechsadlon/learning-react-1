import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    enableAddingCards: PropTypes.bool,
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
    title: settings.searchResultsTitle,
  }
  render() {
    const {cards, icon, title} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>{title}
          </h3>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>
      </Container>
    );
  }
}

export default SearchResults;

