import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { pageContents, listData, settings } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={pageContents.title} image={listData.image} />
    <h2>{settings.navLinksHeaders.faq}</h2>
    <p>{pageContents.text}</p>
  </Container>
);

export default Faq;