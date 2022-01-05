import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

const ROOT_URL = "https://us-central1-rn-otp-9dd5c.cloudfunctions.net/"

class SignUpForm extends Component<any , any>{
    state={ phone: ""}

    handleSubmit(){
        axios.post(`${ROOT_URL}/createUser`, {
            phone: this.state.phone
        }).then(() => {
            axios.post(`${ROOT_URL}/requestOneTimePassword`, {
                phone: this.state.phone
            }).catch((err) => {
                console.log("ALLESYS - Error", err)
            })
        })
    }

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
