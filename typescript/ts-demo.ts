

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
loggingIdentity([1,2,3,4])

function identity<T>(arg: T): T {
    return arg
}

let myIdentity: <T>(arg: T) => T = identity


let yourIdentity: <U>(arg: U) => U = identity



interface IdentityFn {
    <T>(arg: T): T
}

let hisIdentity: IdentityFn = identity

interface IdentityFn1<T> {
    (arg: T): T
}

let herIdentity: IdentityFn1<number> = identity

type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
    return (typeof n === 'string')?n:n()
}

// 类型注解
function greeter(person: string){
    return "hello" + person
}

greeter("world")


