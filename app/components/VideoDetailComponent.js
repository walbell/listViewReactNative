import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableHighlight
 } from 'react-native';
import YouTube from 'react-native-youtube';
import Palette from '../styles/palette';

const width = Dimensions.get('window').width,
    height = Dimensions.get('window').height; //full height


export class VideoDetailComponent extends Component {
    render() {
        return (
            <View>
                <YouTube
                  ref="youtubePlayer"
                  videoId={this.props.video.youtube_id} // The YouTube video ID
                  play={true}           // control playback of video with true/false
                  hidden={false}        // control visiblity of the entire view
                  playsInline={true}    // control whether the video should play inline
                  loop={true}          // control whether the video should loop when ended
                  showinfo={false}     //do not display information (title and uploader)
                  modestbranding={true} //does not show a YouTube logo. Default false
                  controls={0}         //do not show controls
                  style={styles.video}/>
                 <View style={styles.infoOverlay}>
                     <Text style={styles.author}>{this.props.video.author.name}</Text>
                     <Text style={styles.title}>{this.props.video.title}</Text>
                 </View>
                 <TouchableHighlight onPress={() => this.props.onPress(this.props.video)}>
                    <View style={styles.button}>
                        <Text style={styles.CTA}> SHOP INFO </Text>
                    </View>
                 </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    video: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        width: width,
        backgroundColor: 'black',
        borderColor: 'black'
    },
    infoOverlay: {
        opacity: 0.7,
        flex: 1,
        backgroundColor: 'black',
        height: 80,
        width,
        position: 'absolute',
        top: 0,
        left: 0
    },
    author: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        alignSelf: 'center'
    },
    title: {
        color: 'white',
        fontSize: 14,
        alignSelf: 'center'
    },
    CTA: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: Palette.primary_color,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width
    }
});
