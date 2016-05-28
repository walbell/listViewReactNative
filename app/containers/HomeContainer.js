import { connect } from 'react-redux';
import React, {
  View,
  Component,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import {
  getVideos
} from '../actions/videoActions';
import {ListViewComponent} from '../components/ListViewComponent';

class HomeContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ListViewComponent
                    navigator={this.props.navigator}
                    videos={this.props.videos.results}
                    getVideos={this.props.getVideos}
                    isSearching={this.props.videos.isSearching} />
            </View>
        );
    }
}

const stateToProps = (state) => {
    return {
        videos: state.videos
    };
},
dispatchToProps = (dispatch) => {
    return bindActionCreators({
        getVideos
    }, dispatch);
},
styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default connect(stateToProps, dispatchToProps)(HomeContainer);
