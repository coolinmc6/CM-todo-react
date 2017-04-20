import React, { Component } from 'react';
import { generateID, findByID, toggleTodo, updateTodo } from './lib/todoHelpers'

export default class TodoList extends Component {

	constructor() {
		super();
		this.state = {
			term: '',
			todos: []
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.renderList = this.renderList.bind(this)

	}

	onInputChange(e) {
		this.setState({
			term: e.target.value
		})
	}
	createTodo() {
		const id = generateID();
		const todo = { item: this.state.term, id: id, complete: false }
		const newTodos = [...this.state.todos, todo]
		this.setState({
			todos: newTodos,
			term: ''
		})
		
	}
	changeCompleteStatus(id) {
		console.log(id)
		// find item with that id
		const todoINeed = findByID(id, this.state.todos)
		console.log(todoINeed);
		// toggle status from false to true
		const updatedTodo = toggleTodo(todoINeed);
		console.log(updatedTodo)
		// update array => find index of item in the array
		const updatedTodos = updateTodo(this.state.todos,updatedTodo)
		console.log(updatedTodos);
		this.setState({
			todos: updatedTodos
		})
	}
	renderList() {
		this.state.todos.map((todo) => {
			return (
				<div key={todo.term}>{todo.term}</div>
			)
		})
	}
	render() {
		return (
			<div>
				<input onChange={this.onInputChange} value={this.state.term}/>
				<button type="submit" onClick={this.createTodo}>Add ToDo</button>
				<div>
					{this.renderList}
					{this.state.todos.map((todo) => {
						return (
							<div key={todo.id} 
								onClick={() => this.changeCompleteStatus(todo.id)}
								className={todo.complete ? 'complete' : ''}>{todo.item}</div>
						)
					})}
				</div>
			</div>
		)
	}
}