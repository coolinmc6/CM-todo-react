import React, { Component } from 'react';
import { generateID, findByID, toggleTodo, updateTodo, deleteTodo } from './lib/todoHelpers'

// import Filter from './Filter';

export default class TodoList extends Component {

	constructor() {
		super();
		this.state = {
			term: '',
			todos: [{ item: "Welcome to Colin's React Todo List!", id: 1, complete: false},
			{ item: "Click an item to mark it complete or incomplete.", id: 2, complete: true},
			{ item: "Use the filters to show all items or only the completed or not yet completed items.", id: 3, complete: false},
			{ item: "Click the red X to delete it...though you could've probably figured that out", id: 4, complete: false}],
			filter: 'all'
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.renderList = this.renderList.bind(this)
		this.filterTodos = this.filterTodos.bind(this);
		this.changeFilter = this.changeFilter.bind(this);
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
	deleteTodoItem(id, e) {
		e.preventDefault();
		const newTodos = deleteTodo(this.state.todos, id);
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
	filterTodos(filter) {
		switch(filter) {
			case 'complete':
				return this.state.todos.filter((todo) => todo.complete === true)
			case 'incomplete':
				return this.state.todos.filter((todo) => todo.complete === false)
			default:
				return this.state.todos;
		}
	}
	changeFilter(filter,e) {
		e.preventDefault();
		this.setState({
			filter: filter
		})
	}
	render() {
		return (
			<div className="todolist-main">
				
				<div>
					<a href="#" 
						onClick={(e) => this.changeFilter('all', e)}
						className="filter-link">
							All</a>&nbsp;&nbsp;
					<a href="#" 
						onClick={(e) => this.changeFilter('complete', e)}
						className="filter-link">
							Completed</a>&nbsp;&nbsp;
					<a href="#" 
						onClick={(e) => this.changeFilter('incomplete', e)}
						className="filter-link">
							Incomplete</a>
					<br />
				</div>
				<input onChange={this.onInputChange} value={this.state.term} name="addTodo"/>
				<button type="submit" onClick={this.createTodo} className="add-btn">Add ToDo</button>
				<div className="todolist">
					{this.renderList}
					{this.filterTodos(this.state.filter).map((todo) => {
						return (
							<div key={todo.id} className="todo-holder">
								<div onClick={() => this.changeCompleteStatus(todo.id)}
									className={`todo-item ${todo.complete ? 'complete' : ''}`}>
									{todo.item}
								</div>
								<a className="delete-item" 
									data-id={todo.id}
									onClick={(e) => this.deleteTodoItem(todo.id, e)}>X</a>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}