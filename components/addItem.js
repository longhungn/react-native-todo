import React from 'react';
import { View, TextInput, Button } from 'react-native';
// import './css/addItem.css';

export default class AddItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    render() {
        var style = {
            view: {
                borderRadius: 2,
                borderColor: '#7f4cc1',
                borderWidth: 1,
                height: 36,
                marginBottom: 5,
            },
            input: {
                flex: 1,
                justifyContent: 'center',
            },
        }
        
        return (
            <View style={style.view}>
                <TextInput ref={component=>this._input=component} style={style.input} onSubmitEditing={this.handleAdd} placeholder=" Add new item"></TextInput>
            </View>
        );
    }
    
    handleAdd(event) {
        if (event.nativeEvent.text == "" || null) {
            return
        }
        this.props.onAdd(event.nativeEvent.text); 
        this._input.setNativeProps({text: ''});
    }
}