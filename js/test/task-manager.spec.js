/**
 * Created by james on 6/20/15.
 */
var _taskManager = null;
var store = {};

beforeEach(function(done){
    require(['../js/src/task-manager.js'], function(TaskManager){
        _taskManager = new TaskManager();

        done();
    });
});

beforeEach(function () {
    store = {
        'task-manager-tasks': [
            {'name': 'Test Task #1', 'date': '12/01/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #2', 'date': '12/02/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #3', 'date': '12/03/2012', 'assigned': 'John Doe' }
        ]
    };

    spyOn(localStorage, 'getItem').and.callFake(function () {
        return JSON.stringify(store['task-manager-tasks']);
    });

    spyOn(localStorage, 'setItem').and.callFake(function () {
        return store['task-manager-tasks'] = JSON.stringify([
            {'name': 'Test Task #1', 'date': '12/01/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #2', 'date': '12/02/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #3', 'date': '12/03/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #4', 'date': '12/04/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #5', 'date': '12/05/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #6', 'date': '12/06/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #7', 'date': '12/07/2012', 'assigned': 'John Doe' }
        ]);
    });
});

describe('the TaskManager class', function () {
    it('should not pollute the global scope', function() {
        _taskManager.loadTasks();

        expect(_taskManager._tasks).toEqual(undefined);
    });

    it('should load a list of tasks', function() {
        _taskManager.loadTasks();

        expect(_taskManager.getTasks()).toEqual([
            {'name': 'Test Task #1', 'date': '12/01/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #2', 'date': '12/02/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #3', 'date': '12/03/2012', 'assigned': 'John Doe' }
        ]);
    });

    it('should populate the tasks array with tasks if there are none in localStorage', function(){
        store['task-manager-tasks'] = [];

        _taskManager.loadTasks();

        expect(_taskManager.getTasks()).toEqual([
            {'name': 'Test Task #1', 'date': '12/01/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #2', 'date': '12/02/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #3', 'date': '12/03/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #4', 'date': '12/04/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #5', 'date': '12/05/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #6', 'date': '12/06/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #7', 'date': '12/07/2012', 'assigned': 'John Doe' }
        ]);
    });

    it('should persist a task to local storage', function(){
        var task = {
            name: 'Test Task #100',
            date: '06/23/2015',
            assigned: 'James Hines'
        };

        _taskManager.loadTasks();

        _taskManager.saveTask(task);

        expect(localStorage.setItem).toHaveBeenCalled();

        expect(_taskManager.getTasks()).toEqual([
            {'name': 'Test Task #1', 'date': '12/01/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #2', 'date': '12/02/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #3', 'date': '12/03/2012', 'assigned': 'John Doe' },
            {'name': 'Test Task #100', 'date': '06/23/2015', 'assigned': 'James Hines' }
        ])
    });
});