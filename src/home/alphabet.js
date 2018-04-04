import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '#'
];
class Alphabet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectIndex: -1
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {alphabet.map((item, index) => {
                    return (
                        <TouchableOpacity
                            onPressIn={() => this.onPressLetter(index)}
                            onPressOut={() => this.onPressOut()}
                            activeOpacity={1}
                            key={index}>
                            <Text
                                style={[
                                styles.letter, index == this.state.selectIndex
                                    ? styles.hightLight
                                    : styles.letter
                            ]}>{item}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    onPressLetter = (index) => {
        this.setState({selectIndex: index});
    }

    onPressOut = () => {
        this.setState({selectIndex: -1});
    }
}

export default Alphabet;

const styles = StyleSheet.create({
    container: {
        width:20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    letter: {
        fontSize: 12,
        color: '#303030'
    },
    hightLight: {
        color: 'red'
    }
});