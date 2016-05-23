import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class DetailComponent extends Component {
    render() {
        return (
            <View style={{margin: 128}}>
                <Text >This is {this.props.rank}</Text>
            </View>
        );
    }
}
