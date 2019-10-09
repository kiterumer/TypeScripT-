let num: number = null
let string: string = undefined

let u: void
// let apple: string = u

// 联合类型
let cat: string | number
cat = 7
cat = "kitty"


interface Person {
    name: string
    age?: number
    [propName: string]: any
    readonly id: number
}

let tom: Person = {
    name: "Jack",
    id: 9527
    // age: 18
}


let array1: number[] = [1,1,11,1]

// 数组泛型
let array2: Array<number> = [7,7,77,7]

// 类数组
function sum() {
    // let args: number[] = arguments
    // let args: {
    //     [index: number]: number
    //     length: number
    //     callee: Function
    // } = arguments

    let args: IArguments = arguments
}

interface IArguments {
    [index: number]: number
    length: number
    callee: Function
}




// 函数
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
}

//使用接口的方式来定义函数的形状
interface Func {
    (source: string, subString: string): boolean
}

let mySearch: Func = function(source: string, subString: string): boolean {
    return source.search(subString) !== -1
}


function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName
}

function push(array: any[],...items: any[]){
    items.forEach((item) => {
        array.push(item)
    })
}

let a = []
push(a,1,7,7,3)


function arrayPush(array: any[], ...items: any[]) {
    items.forEach((item) => {
        array.push(item)
    })
}

// 重载  overload
// function reverse(x: number | string): number | string {
//     if(typeof x === 'number'){
//         return Number(x.toString().split('').reverse().join(''))
//     }else if(typeof x === 'string'){
//         return x.split('').reverse().join('')
//     }
// }

// 优化
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
    if(typeof x === 'number'){
        return Number(x.toString().split('').reverse().join(''))
    }else if(typeof x === 'string'){
        return x.split('').reverse().join('')
    }
}


// 类型断言
// 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用 值 as 类型

function getLength(something: number | string): number {
    if((<string>something).length){
        return (<string>something).length
    }else{
        something.toString().length
    }
}

// <string>something   something as string









