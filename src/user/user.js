import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchHeader from './search-header';
import Divide from '../common/divide';
import UserInfo from './user-info';
import Column from './column';

class User extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <SearchHeader/>
                <UserInfo/>
                <Column/>
            </View>
        );
    }
}

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#ebebeb'
    }
})