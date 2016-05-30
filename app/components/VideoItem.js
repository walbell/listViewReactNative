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
        return (
            <TouchableHighlight onPress={() => this.props.onPress(this.props.video)}>
                <View style={styles.videoItem}>
                    <Image style={styles.cover} source={{ uri: this.props.video.thumbnail }}>
                    <View style={styles.textOverlay}>
                        <Text style={styles.author}>
                            {this.props.video.author.name}
                        </Text>
                        <Text style={styles.title}>
                            {this.props.video.title}
                        </Text>
                    </View>
                    </Image>
                </View>
            </TouchableHighlight>

        );
    }
}

//this defines the interface of the component
VideoItem.propTypes = {
    video: React.PropTypes.object.isRequired
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
    textOverlay: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        width: width / 2,
        height: 100,
        opacity: 0.6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    author: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    title: {
        fontSize: 15,
        color: 'gray'
    }
});
