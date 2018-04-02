import {View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

class Divide extends Component {
    state = {}
    render() {
        return (
            <View style={styles.divide}></View>
        );
    }
}
export default Divide;

const styles = StyleSheet.create({
    divide: {
        height: 5,
        backgroundColor: '#ebebeb',
        borderTopWidth: 1,
        borderTopColor: '#c2c2c2',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    }
})