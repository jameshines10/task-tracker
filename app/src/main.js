require.config({
    paths: {
        ractive: '../../bower_components/ractive/ractive'
    }
});

require(['task-tracker'], function(TaskTracker){
    TaskTracker.init();
});

