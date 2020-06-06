
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    ScrollView,
} from 'react-native';

class App extends Component {
    findEmployees() {
        this.props.getPageList();
    }

    render() {
        const { pageList } = this.props;

        return (
            <View styles={styles.container}>
                <Button
                    title="Get Employee"
                    style={{ paddingTop: 24 }}
                    onPress={() => this.findEmployees()}
                />

                <ScrollView>
                    {pageList.map((employee) => (
                        <Text key={employee.employee_name} style={styles.textCenter}>{employee.employee_name}</Text>
                    ))}
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCenter: {
        textAlign: 'center',
        paddingTop: 20,
    }
});

export default App;
