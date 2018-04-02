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
        paddingRight:12,
        paddingTop:10,
        paddingBottom:10
    }
})