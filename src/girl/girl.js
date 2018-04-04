import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions
} from 'react-native';
import Constant from '../common/constant';

const deviceWidth = Dimensions
    .get('window')
    .width;
class Girl extends Component {

    page = 1;

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            refreshing: false,
            loadMore: false
        }
    }

    componentDidMount() {
        let url = Constant.beautyUrl + this.page;
        this.requestData(url);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                horizontal={false} 
                numColumns={2} 
                data={this.state.data} 
                renderItem={this.getView} 
                onRefresh={this.onRefresh} 
                refreshing={this.state.refreshing} //上拉加载
                onEndReachedThreshold={0.1} 
                onEndReached={this.loadMore} 
                columnWrapperStyle={{
                    borderWidth: 1,
                    borderColor: '#FFFFFF'
                }}></FlatList>
            </View>
        );
    }

    requestData = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                const content = res['showapi_res_body'];
                if (this.state.loadMore) {
                    let newList = [];
                    Object
                        .keys(content)
                        .forEach(key => {
                            if (key !== 'ret_code') {
                                newList.push(content[key]);
                            }
                        });
                    const newArray = this
                        .state
                        .data
                        .concat(newList);
                    this.setState({data: newArray, loadMore: false});
                } else {
                    let newList = [];
                    Object
                        .keys(content)
                        .forEach(key => {
                            if (key !== 'ret_code') {
                                newList.push(content[key]);
                            }
                        });
                    this.setState({data: newList, refreshing: false});
                }
            })
            .catch(err => {
                this.setState({refreshing: false});
            });
    };

    getView = ({item}) => {
        return (
            <Image
                style={styles.img}
                source={{
                uri: item.thumb
            }}></Image>
        );
    };

    onRefresh = () => {
        this.page = 1;
        this.setState({refreshing: true});
        let url = Constant.beautyUrl + this.page;
        this.requestData(url);
    };

    loadMore = () => {
        this.page++;
        let url = Constant.beautyUrl + this.page;
        this.setState({loadMore: true});
        this.requestData(url);
    };

}

export default Girl;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    img: {
        width: deviceWidth / 2 - 2,
        height: deviceWidth / 2 - 2,
        margin: 2
    }
})