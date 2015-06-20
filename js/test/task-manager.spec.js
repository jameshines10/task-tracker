/**
 * Created by james on 6/20/15.
 */
var _taskManager = null;

beforeEach(function(done){
    require(['../js/src/task-manager.js'], function(TaskManager){
        _taskManager = new TaskManager();

        done();
    });
});

describe("the TaskManager class", function () {
    it("should not pollute the global scope", function() {
        _taskManager.loadTasks();

        expect(_taskManager._tasks).toEqual(undefined);
    });

    it("should load a list of tasks", function() {
        _taskManager.loadTasks();

        expect(_taskManager.getTasks()).toEqual([
            {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
            {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
            {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" }
        ]);
    });
});