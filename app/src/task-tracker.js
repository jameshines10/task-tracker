/**
 * Created by james on 6/23/15.
 */
define(['ractive', 'task-manager', 'fade'], function(Ractive, TaskManager, fade){
    var taskTracker = null, taskManager = null;

    return {
        init: function() {
            taskTracker = new Ractive({
                el: 'task-tracker',
                template: '#main',
                transitions: {
                    fade: fade
                }
            });

            taskManager = new TaskManager();

            taskManager.loadTasks();

            taskTracker.set('tasks', taskManager.getTasks());

            taskTracker.on({
                saveTask: function () {
                    var task = {
                        name: this.get('name'),
                        date: this.get('date'),
                        assigned: this.get('assignee')
                    };

                    taskManager.saveTask(task);

                    this.get('tasks').push(task);
                }
            })
        }
    };
});