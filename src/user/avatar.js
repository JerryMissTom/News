import {View, Image, StyleSheet, Text} from 'react-native';
import React, {Component} from 'react';

class Avatar extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.avatar} source={require('../res/emoji_fill.png')}></Image>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>张三</Text>
                    <Text style={styles.hint}>查看或者编辑个人主页</Text>
                </View>
            </View>
        );
    }
}

export default Avatar;

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#f7f7f7',
        padding: 12,
        borderRadius:5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    hint: {
        fontSize: 12
    },
    userInfo: {
        marginLeft: 12,
        justifyContent: 'space-around',
        height:40
       
    }
})