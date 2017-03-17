import React from 'react';
import styles from './styles.css';

const Input = props =>
  <input style={styles.container} onChange={(e) => props.onChange(e.target.value)}></input>

export default Input
