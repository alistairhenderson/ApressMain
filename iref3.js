/**
 * Created by alistair on 31/05/15.
 */
var foo = 123;

if (true) {
    (function() {
        var foo = 345;
    })
}

console.log(foo);


var foo_a = 345;

if (foo_a == 345) {
    (function() {
            var foo_a = 'yes';
        }

    )
}
console.log(foo_a);