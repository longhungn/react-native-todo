import React from 'react';
import {View, Text, FlatList} from 'react-native';

import TodoItem from './todoItem.js';
import AddItem from './addItem.js'

export default class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ["eat", "walk", "skadoosh"],
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem =this.deleteItem.bind(this);
    }

    render() {
        var todos = [];
        for (let i in this.state.todos) {
            todos.push(<TodoItem key={i} myKey={i} onDelete={this.deleteItem} item={this.state.todos[i]}/>)
        }

        return (
            <View style={{
                height: '80%',
                marginHorizontal: 30,
                backgroundColor: 'white',
                borderTopWidth: 3,
                borderTopColor: '#7f4cc1',
                padding: 10,
                borderRadius: 2,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.2,
                shadowRadius: 2
            }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                }}>Todos</Text>

                <View style={{
                    height: 10,
                    marginBottom: 10,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1
                }}></View>

                <FlatList style={{
                    flex: 1,
                }} 
                data = {
                    todos
                }
                renderItem={({item}) =>  item}
                ItemSeparatorComponent={this.renderSeparator}>
                </FlatList>
                <AddItem onAdd={this.addItem}/>
            </View>
        );
    }

    renderSeparator() {
        return (
            <View style={{
                height: 1,
                width: '90%',
                backgroundColor: '#CED0CE',
            }}></View>
        );
    }
    
    addItem(item) {
        var newTodos = this.state.todos;
        newTodos.push(item);
        this.setState({todos: newTodos});
    }

    deleteItem(index) {
        var newTodos = [...this.state.todos];
        newTodos.splice(index,1);
        this.setState({todos: newTodos});
    }
}

