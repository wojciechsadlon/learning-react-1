import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { pageContents, listData, settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={pageContents.title} image={listData.image} />
    <h2>{settings.navLinksHeaders.info}</h2>
    <p>{pageContents.text}</p>
  </Container>
);

Info.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Info;