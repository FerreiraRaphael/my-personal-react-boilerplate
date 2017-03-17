import React, { PropTypes } from 'react'
import styles from './styles.css'

const Input = props =>
    <input style={styles.container} onChange={(e) => props.onChange(e.target.value)} />

Input.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Input
