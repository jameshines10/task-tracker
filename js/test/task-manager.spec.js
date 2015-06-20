/**
 * Created by james on 6/20/15.
 */
var _hello = null;

beforeEach(function(done){
    require(['../js/src/task-manager.js'], function(hello){
        _hello = hello;

        done();
    });
});

describe("the hello class", function () {
    it("should say hello", function() {
        expect(_hello.sayHello()).toEqual("Hello World!");
    });
});