import React, {
  StyleSheet,
  Text,
  View,
  Image,
  Component,
  TouchableHighlight,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

export class VideoItem extends Component {

    render() {
        console.log('URL', this.props.coverURL);
        return (
            <TouchableHighlight onPress={() => this.props.onPress(this.props.business)}>
                <View style={styles.videoItem}>
                    <Image style={styles.cover} source={{ uri: this.props.coverURL }}>
                    </Image>
                </View>
            </TouchableHighlight>

        );
    }
}

//this defines the interface of the component
VideoItem.propTypes = {
    coverURL: React.PropTypes.string.isRequired,
    business: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    videoItem: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        padding: 1,
        width: width / 2
    },
    cover: {
        flex: 1,
        width: width / 2,
        height: 300,
        resizeMode: 'cover'
    },
    info: {
        flex: 3,
        alignItems: 'flex-end',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    author: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
