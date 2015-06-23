/**
 * Created by james on 6/23/15.
 */
define(['ractive', 'task-manager'], function(Ractive, TaskManager){
    var taskTracker = null, taskManager = null;

    return {
        init: function() {
            taskTracker = new Ractive({
                el: 'task-tracker',
                template: '#main'
            });

            taskManager = new TaskManager();

            taskManager.loadTasks();

            taskTracker.set('tasks', taskManager.getTasks());

            taskTracker.observe('tasks', function () {
                taskManager.persist();
            });
        }
    };
});