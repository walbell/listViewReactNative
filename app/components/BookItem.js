import React, {
  StyleSheet,
  Text,
  View,
  Image,
  Component,
  TouchableHighlight
} from 'react-native';

export class BookItem extends Component {

    render() {
        return (
        <TouchableHighlight onPress={() => this.props.onPress(this.props.rank)}>
            <View style={styles.bookItem}>
                <Image style={styles.cover} source={{ uri: this.props.coverURL }} />
                <View style={styles.info}>
                    <Text style={styles.author}>
                        {this.props.author}
                    </Text>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
        );
    }
}

//this defines the interface of the component
BookItem.propTypes = {
    coverURL: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    bookItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: 2,
        padding: 5
    },
    cover: {
        flex: 1,
        height: 150,
        resizeMode: 'contain'
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
