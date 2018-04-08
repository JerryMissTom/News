import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

class SearchHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            textValue: ''
        }
    }

    render() {
        let deleteView = this.state.textValue.length > 0
            ? this.getDeleteView()
            : null;
        return (
            <View style={styles.container}>
                <View style={styles.searchField}>
                    <Image style={styles.searchIcon} source={require('../res/search.png')}></Image>
                    <TextInput
                        style={styles.searchInput}
                        value={this.state.textValue}
                        onChangeText={(text) => this.searchName(text)}></TextInput>
                    {deleteView}
                </View>
            </View>
        );
    }

    searchName = (text) => {
        this.setState({textValue: text});
    }

    clearText = () => {
        this.setState({textValue: ''});
    }

    getDeleteView = () => {
        return (
            <TouchableOpacity onPress={() => this.clearText()}>
                <Image style={styles.deleteIcon} source={require('../res/delete.png')}></Image>
            </TouchableOpacity>
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
        borderRadius: 20,
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
    deleteIcon: {
        width: 15,
        height: 15,
        marginRight: 10
    }
})