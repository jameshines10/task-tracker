/**
 * Created by james on 6/23/15.
 */
define(['ractive'], function(Ractive){
    var TaskManagerView = {
        init: function() {
            // render our main view
            this.mainView = new Ractive({
                el: 'task-tracker',
                template: '#main'
            });
        }
    }

    return TaskManagerView;
});