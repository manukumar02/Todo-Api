var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go to Market',
	completed: false
}, {
	id: 3,
	description: 'Complete NodeJS Learning',
	completed: false
}]

app.get('/', function(req, res) {
	res.send('TODO API Root');
});

app.get('/todos', function(req, res) {
	res.json(todos);
})
app.get('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach(function(todo) {
		if(todoId === todo.id) {
			matchedTodo = todo;
		}
	});

	if(matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}

	//res.send('Asking TODO with id of ' + req.params.id )
})

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '!');
})