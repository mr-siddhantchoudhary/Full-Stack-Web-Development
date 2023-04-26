function hof(fn) {
    fn();
}

hof(function fn() {
    console.log("executing.....");
})


setTimeout(function f() {
    console.log("siddhant");
}, 2000);