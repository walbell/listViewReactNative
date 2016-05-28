import {
  Navigator
} from 'react-native';

export class NavigationBar extends Navigator.NavigationBar {
    render() {
        let routes = this.props.navState.routeStack;

        if (routes.length) {
            let route = routes[routes.length - 1];

            if (route.hideNavBar === true) {
                return null;
            }
        }

        return super.render();
    }
}
