/**
 * Created by Administrator on 6/1/2015.
 */


setTimeout(function() {
        console.log('Timeout set for 2 seconds to appear');
    }
    ,2000
);

/** the settimeout takes 2 arguments the first one is the function passing the log to it and the second one is the 2000 for the delay

   because of this we can also write it like this */


 function foo(){
    console.log('This will apear after 1 seconds');
}

setTimeout(foo,1000);