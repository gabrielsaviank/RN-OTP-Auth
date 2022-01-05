import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

class SignUpForm extends Component<any , any>{
    state={ phone: ""}

    handleSubmit = () => {};

    render(){
        return(
            <View style={{width: 300}}>
                <View style={{ marginBottom: 10 }}>
                    <Input
                        label="Enter Phone Number"
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({ phone })}
                    />
                </View>
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}

export default SignUpForm
