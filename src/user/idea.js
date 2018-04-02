import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Title from './title';
class Idea extends Component {
    items = ['延时摄影', '美食模板', '好物分享模板', 'DIY手工模板'];
    render() {
        return (
            <View style={styles.container}>
                <Title title='想法' action='前往想法首页'/>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollview}>
                    {this
                        .items
                        .map((item, index) => <ScrollItem key={index} desc={item}/>)}
                </ScrollView>
            </View>
        );
    }
}

export default Idea;

class ScrollItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.itemContainer}>
                <View>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}>APP设计细节发现大会</Text>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.desc}>APP设计细节发现大会细节发现细节发现细节发现</Text>
                </View>
                <View style={styles.img}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderBottomColor: '#c2c2c2'
    },
    scrollview: {
        height: 70
    },
    itemContainer: {
        height: 70,
        width: 250,
        marginRight:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 5,
    },
    title: {
        fontSize: 14, 
        width:180
    },
    desc: {
        fontSize: 12,
        width:180
    },
    img: {
        width: 40,
        height: 60,
        backgroundColor:'red',
        borderRadius: 10,
    }
})