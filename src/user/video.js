import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import Title from './title';
class Video extends Component {

 items=['延时摄影','美食模板','好物分享模板','DIY手工模板'];

    render() {
        return (
            <View style={styles.container}>
                <Title title='视频创作' action='拍一个'/>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollview}>
                   {this.items.map((item,index)=>
                    <ScrollItem key={index}  desc={item} />
                   )}
                   
                </ScrollView>
            </View>
        );
    }
}

class ScrollItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.item}>
                <Text>{this.props.desc}</Text>
            </View>
        );
    }
}

export default Video;
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
    item: {
        height: 70,
        width: 150,
        backgroundColor: 'red',
        marginRight: 10,
        borderRadius: 10,
        paddingBottom:10,
        justifyContent:'flex-end',
        alignItems:'center'
    }
})