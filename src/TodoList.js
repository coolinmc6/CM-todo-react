import React, { Component } from 'react';
import { generateID, findByID, toggleTodo, updateTodo, deleteTodo } from './lib/todoHelpers'

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
		// find item with that id
		const todoINeed = findByID(id, this.state.todos)
		
		// toggle status from false to true
		const updatedTodo = toggleTodo(todoINeed);
		
		// update array => find index of item in the array
		const updatedTodos = updateTodo(this.state.todos,updatedTodo)
		
		// update state
		this.setState({
			todos: updatedTodos
		})
	}
	deleteTodoItem(id) {
		
		console.log(id);


		const newTodos = deleteTodo(this.state.todos, id);
		console.log(newTodos);


		// update state
		this.setState({
			todos: newTodos
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
			<div className="todolist-main">
				<input onChange={this.onInputChange} value={this.state.term} name="addTodo"/>
				<button type="submit" onClick={this.createTodo} className="add-btn">Add ToDo</button>
				<div className="todolist">
					{this.renderList}
					{this.state.todos.map((todo) => {
						return (
							<div key={todo.id} 
								onClick={() => this.changeCompleteStatus(todo.id)}
								className={`todo-item ${todo.complete ? 'complete' : ''}`}>
								{todo.item}
								<a className="delete-item" 
									data-id={todo.id}
									onClick={() => this.deleteTodoItem(todo.id)}>X</a>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}