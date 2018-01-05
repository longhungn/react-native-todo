import React from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';

// import './css/todoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.scratch = this.scratch.bind(this);
        this.state = {
            decoration: ""
        }
    }
    
    render() {
        var swipeoutBtns = [
            {
                text: 'Delete',
                onPress: this.handleDelete,
                type: 'delete',
            }
        ];
        
        return (
            <Swipeout right={swipeoutBtns} autoClose={true} style={{backgroundColor: 'white'}}>
                <View style={{
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginRight: 10,
                    marginBottom: 2,
                    backgroundColor: 'white',
                }}>
                    <Text>{this.props.item}</Text>
                </View>
            </Swipeout>
        );
    }
    
    scratch() {
        this.setState({decoration: "strikethrough"});
    }
    
    handleDelete() {
        // console.log(this.props);
        // Alert.alert("pressed");
        this.props.onDelete(this.props.myKey);
    }
}