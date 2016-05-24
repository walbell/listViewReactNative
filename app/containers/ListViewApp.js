import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Text
} from 'react-native';
import {ListViewComponent} from '../../ListViewComponent';

export default class ListViewApp extends Component {
    render () {
        return (
          <Navigator
            configureScene={ this.configureScene }
            sceneStyle={styles.scene}
            ref={(navigator) => {
                this.navigator = navigator;
            }}
            renderScene={this.renderScene}
            tintColor='#AAAAAA'
            barTintColor='#AAAAAA'
            titleTextColor='#AAAAAA'
            navigationBarHidden={false}
            initialRoute={{
                title: 'ListView',
                component: ListViewComponent,
                onPress: this.onPress
            }}
                navigationBar={
                  <Navigator.NavigationBar
                    style={ styles.nav }
                    routeMapper={ NavigationBarRouteMapper } />
                } />
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

    onPress() {
        alert("YO FROM RIGHT BUTTON");
    }
}

let NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
            <TouchableHighlight
            underlayColor="transparent"
            onPress={() => {
                if (index > 0) {
                    navigator.pop();
                }
            }}>
            <Text style={ styles.navbarLeftButton }>Back</Text>
            </TouchableHighlight>);
        } else {
            return null;
        }
    },
    RightButton(route, navigator, index, navState) {
        if (index === 0) {
            return (
                <TouchableHighlight
                onPress={ () => route.onPress() }>
                    <Text style={ styles.navbarRightButton }>
                        { route.rightText || 'Right Button' }
                    </Text>
                </TouchableHighlight>);
        }
    },
    Title(route, navigator, index, navState) {
        return <Text style={ styles.navbarTitleText }>{ route.name || 'NY Times' }</Text>;
    }
};

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        padding: 0,
        marginTop: 0
    },
    navbarTitleText: {
        fontWeight: "500",
        marginVertical: 9
    },
    navbarLeftButton: {
        paddingLeft: 10,
        paddingTop: 10
    },
    navbarRightButton: {
        paddingRight: 10,
        paddingTop: 10
    }
});
