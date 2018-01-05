import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import TodoComponent from './components/todoComponent.js';

export default class App extends React.Component {
    render() {

        return (
            <KeyboardAvoidingView behavior='padding' style={{flex: 1, justifyContent: 'center'}}>
                <TodoComponent/>                
            </KeyboardAvoidingView>
        );
    }
}

