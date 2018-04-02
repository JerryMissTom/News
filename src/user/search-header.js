import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React, {Component} from 'react';

class SearchHeader extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchField}>
                    <Image style={styles.searchIcon} source={require('../res/search.png')}></Image>
                    <TextInput style={styles.searchInput} placeholder={'搜索知乎内容'}></TextInput>
                    <Image style={styles.scanIcon} source={require('../res/scan.png')}></Image>
                </View>
            </View>
        );
    }
}

export default SearchHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#c2c2c2'
    },
    searchField: {
        height: 40,
        backgroundColor: '#ebebeb',
        padding: 5,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18
    },
    scanIcon: {
        width: 30,
        height: 30,
        marginRight: 10
    }
})