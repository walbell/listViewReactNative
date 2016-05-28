/**
 * List View component
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions
} from 'react-native';
import { DetailComponent } from '../components/DetailComponent';
import { VideoItem } from '../components/VideoItem';

const width = Dimensions.get('window').width,
    height = Dimensions.get('window').height; //full height

let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export class ListViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows(this.props.videos)
        };
        this.renderRow = this.renderRow.bind(this);
        this.displayDetail = this.displayDetail.bind(this);
    }

    componentDidMount() {
        this.props.getVideos(30, 30);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: ds.cloneWithRows(nextProps.videos)
        });
    }

    displayDetail(rank) {
        this.props.navigator.push({
            component: DetailComponent,
            animation: 'FloatFromBottom',
            hideNavBar: true,
            passProps: {
                rank
            },
            name: `Detail ${rank}`
        });
    }

    //function responsible for rendering the row
    renderRow(rowData) {
        return (
            <VideoItem
                style={styles.videoItem}
                coverURL={rowData.thumbnail}
                title={rowData.title}
                business={rowData.author.name}
                views={rowData.views}
                onPress={this.displayDetail}
            />
        );
    }

    renderHeader() {
        return (
            <View
            style={styles.sectionDivider}>
                <Text style={styles.headingText}>
                Shops around you
                </Text>
            </View>
        );
    }

    renderFooter() {
        return (
            <View
            style={styles.sectionDivider}>
                <Text style={styles.headingText}>
                Scroll to view more shops
                </Text>
            </View>
        );
    }

    render() {
        return (
                <View style={styles.container}>
                    <ListView
                        automaticallyAdjustContentInsets={false}
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        renderHeader={this.renderHeader}
                        renderFooter={this.renderFooter}
                        contentContainerStyle={styles.listView}/>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#303F9F',
        padding: 0,
        marginTop: 60
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
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    sectionDivider: {
        padding: 8,
        backgroundColor: '#70BD99',
        alignItems: 'center',
        width: width
    },
    headingText: {
        flex: 1,
        fontSize: 14,
        color: '#FFFFFF',
        alignSelf: 'center'
    }
});
