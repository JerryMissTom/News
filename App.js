import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation'
import Home from './src/home';
import Detail from './src/detail';
import Setting from './src/setting';
import User from './src/user/user';
import Girl from './src/girl';

const Tab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '新闻',
            gestureResponseDistance: {
                horizontal: 300
            },
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#F37021'
            }, //导航栏的样式
            headerTitleStyle: { //导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center'
            },
            //tab 的属性
            tabBarLabel: '新闻',
            tabBarIcon: ({tintColor}) => (<Image
                source={require('./src/res/home.png')}
                style={[
                {
                    height: 26,
                    width: 26
                }, {
                    tintColor: tintColor
                }
            ]}/>)
        }
    },
    Girl: {
        screen: Girl,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '妹子',
            gestureResponseDistance: {
                horizontal: 300
            },
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#F37021'
            }, //导航栏的样式
            headerTitleStyle: { //导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center'
            },
            //tab 的属性
            tabBarLabel: '妹子',
            tabBarIcon: ({tintColor}) => (<Image
                source={require('./src/res/emoji.png')}
                style={[
                {
                    height: 26,
                    width: 26
                }, {
                    tintColor: tintColor
                }
            ]}/>)
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            //stackNavigator的属性 可以通过设置 , 去除此界面的标题栏
            header:null,
            headerTitle: '我的',
            gestureResponseDistance: {
                horizontal: 300
            },
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#F37021'
            }, //导航栏的样式
            headerTitleStyle: { //导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center'
            },
            //tab 的属性
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (<Image
                source={require('./src/res/user.png')}
                style={[
                {
                    height: 26,
                    width: 26
                }, {
                    tintColor: tintColor
                }
            ]}/>)
        }
    }
}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: false,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false, //是否使标签大写，默认为true
        //共有属性
        showIcon: true, //是否显示图标，默认关闭
        showLabel: true, //是否显示label，默认开启
        activeTintColor: '#F37021', //label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: '#808080', //label和icon的前景色 活跃状态下（未选中）
        indicatorStyle: { //标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0
        },
        style: {
            backgroundColor: 'white'
        },
        labelStyle: {
            marginBottom: 5
        }, //文字的样式
        //图标的样式
        iconStyle: {}
    }
});

export default Navi = StackNavigator({
    Tab: {
        screen: Tab
    },
    Detail: {
        screen: Detail
    }
}, {navigationOptions: {
        // 可以通过 header:null去除所有界面的标题栏
    }});