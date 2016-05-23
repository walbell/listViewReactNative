/**
 * List View component
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { BookItem } from './BookItem';
import { DetailComponent } from './DetailComponent';
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export class ListViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([])
        };

        this.renderRow = this.renderRow.bind(this);
        this.displayDetail = this.displayDetail.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.refreshData();
    }

    refreshData () {
        let endpoint = 'http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=a41fc9894e2a4d1c8b41ad392ac3afe5';
        fetch(endpoint)
        .then(response => response.json())
        .then((rjson) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(rjson.results.books)
            });
        });
    }

    displayDetail(rank) {
        console.log('clicked on ', rank);
        //Actions.ListView();
        this.props.navigator.push({
            component: DetailComponent,
            animation: 'FloatFromBottom',
            passProps: {
                rank
            }
        });
    }

    //function responsible for rendering the row
    renderRow(rowData) {
        return (
            <BookItem
                coverURL={rowData.book_image}
                title={rowData.title}
                author={rowData.author}
                rank={rowData.rank}
                onPress={this.displayDetail}
            />
        );
    }

    renderHeader() {
        return (
            <View
            style={styles.sectionDivider}>
                <Text style={styles.headingText}>
                Bestsellers in Hardcover fiction
                </Text>
            </View>
        );
    }

    renderFooter() {
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
                    renderRow={this.renderRow}
                    renderHeader={this.renderHeader}
                    renderFooter={this.renderFooter}
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
        fontSize: 14,
        color: '#FFFFFF',
        alignSelf: 'center'
    }
});
