import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const Info = ({info, lorem, title, image}) => (
  <Container>
    <Hero titleText={title} image={image} />
    <h2>{info}</h2>
    <p>{lorem}</p>
  </Container>
);

Info.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  lorem: PropTypes.string,
  info: PropTypes.string,
};

export default Info;