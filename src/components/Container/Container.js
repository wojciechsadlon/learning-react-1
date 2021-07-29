import styles from './Container.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Container = ({children}) => (
  <div className={styles.component}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Container;