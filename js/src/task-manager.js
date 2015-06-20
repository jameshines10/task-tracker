define(function(){
    var _tasks = [];

    function TaskManager() {}

    TaskManager.prototype.loadTasks = function() {
        _tasks = [
            {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
            {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
            {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" }
        ];
    };

    TaskManager.prototype.getTasks = function() {
        return _tasks;
    };

    return TaskManager;
});