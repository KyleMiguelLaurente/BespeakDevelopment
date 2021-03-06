import React, {
  useState,
  Component
} from 'react';
import {
  TextInput,
  ScrollView, 
  TouchableOpacity, 
  Text, 
  View,
  Image,
  StyleSheet,
  Document,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import { 
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

import SignUp from "../styles/SignUp";
import Validation from '../styles/Validation';

import { 
    validateEmail,
    validateMobile,
    validatePassword
} from '../helper/TextValidate';

import SignUpNameFields from '../components/SignUpNameFields';

class SignUpNameScreen extends Component {
    state = {
        l_name: '',
        f_name: '',
        org_name: '',
    }
    constructor (props) {
        super(props);
        this.user_type = props.route.params.USER_TYPE
        this._handleTextValue = this._handleTextValue.bind(this)
    }
    
    _handleTextValue(key, value) {
        this.setState({[key]: value});
    }

    _handleSubmit() {
        let params = {
            USER_TYPE: this.user_type,
            l_name: this.state.l_name,
            f_name: this.state.f_name,
            org_name: this.state.org_name
        }
        if(!(this.state.l_name && this.state.f_name) && !(this.state.org_name)) {
            return
        } 
        this.props.navigation.navigate('SignUpFormScreen', params);
    }
    
    render () {
        return (
            <View style={SignUp.SIcontainer}>
                <ScrollView>
                    <Text style={SignUp.SItitleText}>Let's Get Started!</Text>
                    <Text style={SignUp.SUAltText}>Share & see what's happening near you</Text>
                    <SignUpNameFields USER_TYPE = {this.user_type} handleTextValue={this._handleTextValue}/> 
                    <View style={{}}>
                        <TouchableOpacity style={SignUp.continuebtn}
                            onPress={() => this._handleSubmit()}>
                                <Text style={SignUp.continuebtntext}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={SignUp.LetsGetStartedpicContainer}>
                        <Image style={SignUp.loginpic}
                            source={require('../assets/img/LetsGetStarted.png')}/>
                    </View>
                </ScrollView>
            </View>  
        );
    }
}

class SignUpFormScreen extends Component {
    state = {
        email: {value: '', valid: ''},
        mobile: {value: '', valid: ''},
        password: {value: '', valid: ''},
        confirm: {value: '', valid: ''}
    }
    _handleText(key, value) {
        let val_msg = 'This is a required field.'
        if(key == 'email') {
            if(validateEmail(value)) {
                this.setState({[key]: {'value': value}})
            } else {
                if(value) {
                    val_msg = 'Invalid email format.';
                }
                this.setState({[key]: {'value': false}})
                this.setState({[key]: {'valid': val_msg}})
            }
        } else if(key == 'mobile') {
            if(validateMobile(value)) {
                this.setState({[key]: {'value': value}})
            } else {
                if(value) {
                    val_msg = 'Invalid mobile number format.';
                }
                this.setState({[key]: {'value': false}})
                this.setState({[key]: {'valid': val_msg}})
            }
        } else if(key == 'password'){
            if(validatePassword(value)) {
                this.setState({[key]: {'value': value}})
            } else {
                if(value) {
                    val_msg = 'Your password is too weak.';
                }
                this.setState({[key]: {'value': false}})
                this.setState({[key]: {'valid': val_msg}})
            }
        } else {
            if(value == this.state.password.value) {
                this.setState({[key]: {'value': value}})
            } else {
                if(value) {
                    val_msg = 'Your password does not match.';
                }
                this.setState({[key]: {'value': false}})
                this.setState({[key]: {'valid': val_msg}})
            }
        }
    }
    _handleSubmit() {
        let is_valid = true;
        for(var key in this.state) {
            if(!this.state[key].value) {
                is_valid = false;
                this.setState({[key]: {'valid': 'This is a required field.'}})
            }
            is_valid = is_valid && true;
        }

        if(is_valid) {
            if(this.state.password.value == this.state.confirm.value) {
                Alert.alert('Valid', 'All things are valid!');
            } else {
                this.setState({'confirm':{'valid': 'Your password does not match.'}})
            }
        }
    }
    render () {
        return (
            <View style={SignUp.SUcontainer}>
                <KeyboardAvoidingView>
                    <ScrollView>
                        <Text style={SignUp.SUtitleText}>Almost There...</Text>
                        <Text style={SignUp.SUAltText}>We need additional details to get to know you</Text>
                        <TextInput style={SignUp.SIinput} placeholder='Email' maxLength={150} 
                            onChangeText = {text => this._handleText('email', text)}/>
                        <Text style={Validation.textVal}>
                            {this.state.email.valid}</Text>   
                        <TextInput style={SignUp.SIinput} placeholder='(+63)' maxLength={15}
                            onChangeText = {text => this._handleText('mobile', text)}/>
                            <Text style={Validation.textVal}>
                                {this.state.mobile.valid}</Text>  
                        <TextInput style={SignUp.SIinput} placeholder='Password' secureTextEntry={true}
                            maxLength = {15}
                            onChangeText = {text => this._handleText('password', text)}/>
                            <Text style={Validation.textVal}>
                                {this.state.password.valid}</Text>  
                        <TextInput style={SignUp.SIinput} placeholder='Confirm Password' secureTextEntry={true}
                            maxLength = {15}
                            onChangeText = {text => this._handleText('confirm', text)}/>
                            <Text style={Validation.textVal}>
                                {this.state.confirm.valid}</Text>  
                        
                        <View style={{alignSelf:'center'}}>
                            <Text style={SignUp.altText}>By clicking the button below, you agree to our</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <TouchableOpacity>
                                <Text style={SignUp.btnText}>Terms</Text>
                            </TouchableOpacity>
                            <Text style={SignUp.andText}> and </Text>
                            <TouchableOpacity>
                                <Text style={SignUp.btnText}>Data Policy</Text>
                            </TouchableOpacity>
                            <Text style={SignUp.andText}>.</Text>
                        </View>
                        
                        <TouchableOpacity style={SignUp.continuebtn}
                            onPress={() => this._handleSubmit()}>
                                <Text style={SignUp.continuebtntext}>I'm done!</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={SignUp.AlmostTherepicContainer}>
                        <Image style={SignUp.AlmostTherepic}
                            source={require('../assets/img/AlmostThere.png')}/>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default { SignUpNameScreen, SignUpFormScreen }