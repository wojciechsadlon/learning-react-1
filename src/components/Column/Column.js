import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
// import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }
  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>{title}
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {/*
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        */}
      </section>
    );
  }
}

export default Column;