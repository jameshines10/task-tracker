/**
 * Created by james on 6/23/15.
 */
define(['ractive', 'task-manager', 'fade'], function(Ractive, TaskManager, fade){
    var taskTracker = null, taskManager = null;

    return {
        init: function() {
            taskManager = new TaskManager();

            taskManager.loadTasks();

            taskTracker = new Ractive({
                el: 'task-tracker',
                template: '#main',
                transitions: {
                    fade: fade
                },
                data: {
                    task: {
                        name: '',
                        date: '',
                        assigned: ''
                    },
                    tasks: taskManager.getTasks()
                },
                noIntro: true
            });

            taskTracker.on({
                saveTask: function (event) {
                    var name, date, assigned, task;

                    name = event.context.name;
                    date = event.context.date;
                    assigned = event.context.assigned;

                    // World class form validation right here buddy!
                    if(name !== '' && date !== '' && assigned !== ''){
                        task = {
                            name: name,
                            date: date,
                            assigned: assigned
                        };

                        taskManager.saveTask(task);

                        this.set('task', {
                            name: '',
                            date: '',
                            assigned: ''
                        });
                    }

                    event.original.preventDefault();
                }
            })
        }
    };
});