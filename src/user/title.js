import React, {Component} from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
class Title extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.left}>
            <Image  style={styles.img} source={require('../res/emoji_fill.png')}></Image>
             <Text style={styles.title}>{this.props.title}</Text>
            </View>
             <Text style={styles.action}>{this.props.action}</Text>
            </View>
        );
    }
}

export default Title;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    left:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    img:{
        width:35,
        height:35
    },
    title:{
        fontSize:14,
        marginLeft:10
    },
    action:{
        fontSize:12,
        color:'#0066CC'
    }
})