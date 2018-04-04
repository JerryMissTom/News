import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchHeader from './search-header';
import UserInfo from './user-info';
import Column from './column';
import Video from './video';
import Idea from './idea';
import Setting from './setting';
class User extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <SearchHeader/>
                <ScrollView  bounces={false}>
                    <UserInfo/>
                    <Column/>
                    <Video/>
                    <Idea/>
                    <Setting/>
                </ScrollView>
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