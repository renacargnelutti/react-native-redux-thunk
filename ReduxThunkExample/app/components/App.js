
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    ActivityIndicator,
} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProfileData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            if (['failure', 'success'].indexOf(this.props.profileStatus) !== -1) {
                // TODO: hide splashscreen!!!
            }
        }
    }

    render() {
        if (['loading', 'unknown'].indexOf(this.props.profileStatus) !== -1) {
            return (
                <View style={styles.container}>
                    <Text>Splash</Text>
                </View>
            )
        }

        if (['logging', 'failure'].indexOf(this.props.profileStatus) !== -1) {
            return (
                <View style={styles.container}>
                    <Text>Login</Text>

                    {this.props.profileStatus === 'logging' ?
                        <ActivityIndicator size={'small'} color={'red'} />
                        :
                        <Button
                            title={'Loguearme'}
                            onPress={() => this.props.login({ username: 'johndoe', password: '123456' })}
                        />
                    }
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text>App.js</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCenter: {
        textAlign: 'center',
        paddingTop: 20,
    }
});

export default App;
