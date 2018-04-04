import {View, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Avatar from './avatar';
import UserData from './user-data';
class UserInfo extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Avatar/>
                <UserData/>
            </View>
        );
    }
}

export default UserInfo;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderBottomColor: '#c2c2c2'
    }
})