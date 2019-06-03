import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Title from '../../components/Title';
class ConfirmPhone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    static navigationOptions = {
        headerStyle: {
            borderBottomWidth: 0
        }
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 3, paddingHorizontal: 35, paddingTop: 30 }}>
                    <View style={{}}>
                        <Title title='Enter 4 digit code sent to you at' value='1234567890' />
                    </View>
                    <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TextInput style={styles.input} />
                        </View>

                    </View>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Button title='Verify' />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 3 }}>
                        <Text style={{ fontSize: 12, color: '#ABB4BD', marginTop: 30}}>Didn't receive a verification code?</Text>
                        <Text style={{ fontSize: 12, color: '#FF1654', marginTop: 20 }}>Resend code | Change number</Text>
                    </View>
                </View>
                <View style={{ flex: 2 }}></View>
            </View>
        )
    }
}

export default ConfirmPhone;

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'rgba(171,180,189,0.30)',
        borderBottomWidth: 1,
        paddingVertical: 10,
        width: '60%',
        textAlign: 'center'
    }
});