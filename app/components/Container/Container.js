import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

class Container extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
