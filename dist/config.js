function* generatorFn(i) {
    console.log("A");
    yield i;
    console.log("B");
    yield 2;
}
const gen = generatorFn(5);
console.log(gen.next());
console.log(gen.next());
