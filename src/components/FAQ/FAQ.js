import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { pageContents, listData, settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

const Faq = () => (
  <Container>
    <Hero titleText={pageContents.title} image={listData.image} />
    <h2>{settings.navLinksHeaders.faq}</h2>
    <p>{pageContents.text}</p>
  </Container>
);

Faq.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Faq;