import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

class SignUpForm extends Component<any , any>{
    render(){
        return(
            <View style={{width: 300}}>
                <View style={{ marginBottom: 10 }}>
                    <Input
                        label="Enter Phone Number"
                    />
                </View>
                <Button
                    title="Submit"
                />
            </View>
        );
    }
};

export default SignUpForm
