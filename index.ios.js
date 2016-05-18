/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import {BookItem} from './BookItem';

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class listViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this._refreshData();
  }

  _refreshData () {
    let endpoint = 'http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=a41fc9894e2a4d1c8b41ad392ac3afe5';
    fetch(endpoint)
      .then(response => response.json())
      .then((rjson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rjson.results.books),
        });
      });
  }

  //function responsible for rendering the row
  _renderRow(rowData) {
    return (
            <BookItem
              coverURL={rowData.book_image}
              title={rowData.title}
              author={rowData.author}
            />
         );
  }

  _renderHeader() {
    return (
      <View
        style={styles.sectionDivider}>
        <Text style={styles.headingText}>
          Bestsellers in Hardcover fiction
        </Text>
      </View>
    );
  }

  _renderFooter() {
    return (
      <View
        style={styles.sectionDivider}>
        <Text style={styles.headingText}>
          Data from the New York Times.
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderHeader={this._renderHeader}
          renderFooter={this._renderFooter}
          style={styles.listView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 0,
    marginTop: 60,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  text: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  listView: {
    flex: 1,
    backgroundColor: '#999999',
  },
  sectionDivider: {
    padding: 8,
    backgroundColor: '#70BD99',
    alignItems: 'center',
  },
  headingText: {
    flex: 1,
    fontSize: 24,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});

AppRegistry.registerComponent('listViewExample', () => listViewExample);
