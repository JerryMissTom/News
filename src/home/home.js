import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, SectionList} from 'react-native';
import Alphabet from './alphabet';
import SearchHeader from './searchHeader';
import Constant from '../common/constant';
const deviceWidth = Dimensions
    .get('window')
    .width;
const deviceHeiht = Dimensions
    .get('window')
    .height;
class Home extends Component {

    setTimeout = null;
    constructor(props) {
        super(props)
        this.state = {
            selectLetter: ''
        }
    }

    render() {

        let view = this.state.selectLetter.length > 0
            ? (
                <View style={styles.letterField}>
                    <Text style={styles.letter}>{this.state.selectLetter}</Text>
                </View>
            )
            : null;
        return (
            <View style={styles.container}>
                <SearchHeader/>
                <View style={styles.mainField}>
                    <SectionList
                        bounces={false}
                        renderItem={({item}) => this.getItem(item)}
                        renderSectionHeader={({section}) => this.getSectionHeader(section)}
                        sections={Constant.sections}/>
                    <View style={styles.alphabetField}>
                        <Alphabet onSelectLetter={(item) => this.selectLetter(item)}/>
                    </View>
                    {view}
                </View>
            </View>
        );
    }

    selectLetter = (text) => {
        if (this.setTimeout != null) {
            clearTimeout(this.setTimeout);
        }
        this.setState({selectLetter: text});
        this.setTimeout = setTimeout(() => {
            this.setState({selectLetter: ''});
        }, 500);
    }

    getSectionHeader = (section) => {
        return (
            <View style={styles.sectionHeader}>
                <Text
                    style={{
                    fontSize: 12,
                    marginLeft: 10
                }}>{section.key}</Text>
            </View>
        );
    }

    getItem = (item) => {
        return (
            <View style={styles.item}>
                <Text
                    style={{
                    fontSize: 16,
                    marginLeft: 10
                }}>{item.title}</Text>
            </View>
        );
    }
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    mainField: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    alphabetField: {
        height: '100%',
        justifyContent: 'center'
    },
    letterField: {
        position: 'absolute',
        width: 20,
        height: 20,
        marginTop: deviceHeiht / 2 - 80,
        marginLeft: deviceWidth / 2 - 16,
        marginRight: "auto",
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#303030'
    },
    letter: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 12
    },
    sectionHeader: {
        height: 20,
        backgroundColor: '#ebebeb',
        justifyContent: 'center'
    },
    item: {
        height: 30,
        justifyContent: 'center'
    }
});