import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

class UserData extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <DetailData data='560' description='我的创作'/>
                <View style={styles.divide}></View>
                <DetailData data='1.2K' description='关注'/>
                <View style={styles.divide}></View>
                <DetailData data='40' description='我的收藏'/>
                <View style={styles.divide}></View>
                <DetailData data='560' description='最近浏览'/>
            </View>
        );
    }
}

export default UserData;

class DetailData extends Component {

    render() {
        return (
            <View style={styles.dataField}>
                <Text style={styles.data}>
                    {this.props.data}
                </Text>
                <Text style={styles.label}>{this.props.description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 15,
        paddingBottom: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    divide: {
        width: 1,
        height: 12,
        backgroundColor: '#e8e8e8'
    },
    dataField: {
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    data: {
        fontSize: 16,
        textAlign: 'center'
    },
    label: {
        fontSize: 12,
        textAlign: 'center'
    }
})