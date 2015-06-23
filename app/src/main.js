require.config({
    paths: {
        ractive: '../../bower_components/ractive/ractive',
        fade: '../../bower_components/ractive-transitions-fade/dist/ractive-transitions-fade'
    }
});

require(['task-tracker'], function(TaskTracker){
    TaskTracker.init();
});

