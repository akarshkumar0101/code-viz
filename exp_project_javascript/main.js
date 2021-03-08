
console.log('hello')
let a=3
let b=a+2
let c = a+b
console.log('value of addition: ', c)


const my_function_simple = (a, b) => a + b;
const my_function_adv = (a, b) => {
    return a+b;
}

const adv_struct = (a, b, c) => c(a+b);

adv_struct(1, 2, (ans) => {
    console.log('answer:', ans);
})
