import React, { Component } from 'react';

export default class TodoList extends Component {

	constructor() {
		super();
		this.state = {
			term: '',
			todos: [{ term: 'test item', id: 1}]
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.renderList = this.renderList.bind(this)
	}
	generateID() {
		const num = Math.floor(Math.random()*10000000);
		return num;
	}
	onInputChange(e) {
		this.setState({
			term: e.target.value
		})
	}
	createTodo() {
		const todo = { term: this.state.term, id: this.generateID }
		const newTodos = [...this.state.todos, todo]
		this.setState({
			todos: newTodos,
			term: ''
		})
		console.log(this.state.todos)
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
							<div key={todo.id}>{todo.term}</div>
						)
					})}
				</div>
			</div>
		)
	}
}