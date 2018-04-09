import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ColumnItem from './columnItem';

class Column extends Component {
    items = [
        '我的书架',
        '我的Live',
        '我的私家课',
        '付费咨询',
        '已购',
        '礼券'
    ];
    
    listItems = this
        .items
        .map((item, index) => <ColumnItem key={index} desc={item}/>);

    render() {
        return (
            <View style={styles.container}>
                {this.listItems}
            </View>
        );
    }
}

export default Column;
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#ffffff',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderBottomColor: '#c2c2c2'
    }
})