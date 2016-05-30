import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Text
} from 'react-native';
import {Tabs} from './Tabs';
import {NavigationBar} from './CustomNavigationBar';
import Palette from '../styles/palette';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideNavBar: false
        };

        this.renderScene = this.renderScene.bind(this);
    }

    render () {
        return (
          <Navigator
            configureScene={ this.configureScene }
            sceneStyle={styles.scene}
            ref={(navigator) => {
                this.navigator = navigator;
            }}
            renderScene={this.renderScene}
            navigationBarHidden={true}
            onWillFocus={this.onNavWillFocus}
            initialRoute={{
                title: 'Tabs',
                component: Tabs,
                onPress: this.onPress
            }}
                navigationBar={
                    <NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                    />
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
                        { route.rightText || 'Sign Up' }
                    </Text>
                </TouchableHighlight>);
        }
    },
    Title(route, navigator, index, navState) {
        return <Text style={ styles.navbarTitleText }>{ route.name || 'Good Look' }</Text>;
    }
};

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Palette.primary_color,
        padding: 0
    },
    navbarTitleText: {
        fontWeight: "500",
        marginTop: 9,
        color: 'white'
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
