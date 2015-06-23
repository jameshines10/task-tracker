define(function(){
    var _tasks = [];
    var _localStorage = null;

    function TaskManager() {}

    TaskManager.prototype.loadTasks = function() {
        try {
            _localStorage = window.localStorage;
        } catch (err) {
            _tasks = [];
            return;
        }

        if (_localStorage) {
            _tasks = JSON.parse(_localStorage.getItem('task-manager-tasks'));

            if(_tasks === null) {
                _tasks = [
                    {'name': 'Test Task #1', 'date': '12/01/2012', 'assigned': 'John Doe' },
                    {'name': 'Test Task #2', 'date': '12/02/2012', 'assigned': 'John Doe' },
                    {'name': 'Test Task #3', 'date': '12/03/2012', 'assigned': 'John Doe' },
                    {'name': 'Test Task #4', 'date': '12/04/2012', 'assigned': 'John Doe' },
                    {'name': 'Test Task #5', 'date': '12/05/2012', 'assigned': 'John Doe' },
                    {'name': 'Test Task #6', 'date': '12/06/2012', 'assigned': 'John Doe' },
                    {'name': 'Test Task #7', 'date': '12/07/2012', 'assigned': 'John Doe' }
                ];

                _localStorage.setItem('task-manager-tasks', JSON.stringify(_tasks));
            }
        }
    };

    TaskManager.prototype.getTasks = function() {
        return _tasks;
    };

    TaskManager.prototype.saveTask = function(task) {
        _tasks.push(task);

        _localStorage.setItem('task-manager-tasks', JSON.stringify(_tasks));
    };

    return TaskManager;
});