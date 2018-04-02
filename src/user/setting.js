import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ColumnItem from './column-item';
class Setting extends Component {

    item = ['社区建设', '夜间模式', '设置'];
    render() {
        return (
            <View style={styles.container}>
                {this
                    .item
                    .map((item, index) => <ColumnItem key={index} desc={item}/>)}
            </View>
        );
    }
}

export default Setting;

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderBottomColor: '#c2c2c2',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    }
})