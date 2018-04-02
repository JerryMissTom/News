import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
const deviceWidth = Dimensions
    .get('window')
    .width;
class ColumnItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={require('../res/emoji_fill.png')}></Image>
                <Text style={styles.description}>{this.props.desc}</Text>
            </View>
        );
    }
}

export default ColumnItem;

const styles = StyleSheet.create({
    container: {
        width: deviceWidth / 4,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 35,
        height: 35
    },
    description: {
        fontSize: 12
    }
})