import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = ({titleText, image, ...props}) => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(titleText)}</h2>
    <img className={styles.image} src={image} alt={props.imageAlt} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};

Hero.defaultProps = {
  imageAlt: 'rocket in the universe',
};

export default Hero;