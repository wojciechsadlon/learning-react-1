import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const Faq = ({...props}) => (
  <Container>
    <Hero titleText={props.title} image={props.image} />
    <h2>{props.subtitle}</h2>
    <p>{props.lorem}</p>
  </Container>
);

Faq.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  lorem: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Faq;