/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator
} from 'react-native';
import {ListViewComponent} from './ListViewComponent';
// import {DetailComponent} from './DetailComponent';
import {Main} from './Main';


class listViewExample extends Component {
    render () {
        return (
          <Navigator
            configureScene={ this.configureScene }
            sceneStyle={styles.container}
            ref={(navigator) => {
                this.navigator = navigator;
            }}
            renderScene={this.renderScene}
            tintColor='#000000'
            barTintColor='#000000'
            titleTextColor='#000000'
            navigationBarHidden={false}
            initialRoute={{
                title: 'ListView',
                component: ListViewComponent}} />
        );
    }

    configureScene (route, routeStack) {
        if (route.animation) {
            return Navigator.SceneConfigs[route.animation];
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    renderScene (route, navigator) {
        let Component = route.component;
        return (
            <Component
              route={route}
              navigator={navigator}
              topNavigator={navigator}
              {...route.passProps} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        padding: 0,
        marginTop: 60
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6'
    },
    text: {
        flex: 1,
        backgroundColor: '#DDDDDD'
    },
    listView: {
        flex: 1,
        backgroundColor: '#999999'
    },
    sectionDivider: {
        padding: 8,
        backgroundColor: '#70BD99',
        alignItems: 'center'
    },
    headingText: {
        flex: 1,
        fontSize: 24,
        color: '#FFFFFF',
        alignSelf: 'center'
    }
});

AppRegistry.registerComponent('listViewExample', () => listViewExample);
