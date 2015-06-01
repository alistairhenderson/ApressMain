/**
 * Created by Administrator on 6/1/2015.
 */

function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction);
    }

    bar();
}

outerFunction('Hello Alistair');