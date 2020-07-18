
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class App extends Component {
    render() {
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
