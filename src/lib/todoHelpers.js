export const generateID = () => Math.floor(Math.random()*1000000);

export const findByID = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, complete: !todo.complete});

export const updateTodo = (list, updated) => {
	const todoIndex = list.findIndex((item) => item.id === updated.id );

	const updateList = [...list.slice(0,todoIndex),
						updated,
						...list.slice(todoIndex+1)]
	return updateList;
}

export const deleteTodo = (list, id) => {

	// find todo to delete
	const todoIndex = list.findIndex((item) => item.id === id);

	// delete todo from array
	const newList = [...list.slice(0,todoIndex),
					...list.slice(todoIndex+1)]
	return newList;
}
