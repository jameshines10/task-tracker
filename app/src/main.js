require.config({
    paths: {
        ractive: '../../bower_components/ractive/ractive'
    }
});

require(['task-manager', 'task-manager-view'], function(TaskManager, TaskManagerView){
    TaskManagerView.init();
});

