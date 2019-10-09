// let createByNewBoolean: boolean = new Boolean(1)


let createByNewBoolean: Boolean = new Boolean(1)

let createByBoolean: boolean = Boolean(1) //直接调用Boolean返回boolean类型


let binary: number = 0b1010

let octal: number = 0o744


function alertName(): void {
    alert('hello world')
}

let unusable: void = undefined  //void类型只能将它赋值为undefined和null


function getLength1(something: string | number): string {
    // return something.length    length不是number和string的共有属性
    return something.toString()
}

// 类型别名
type String1 = string


//字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove'

function handleEvent(ele: Element, event: EventNames) {
    console.log(ele,event)
}

// 元组

let kite: [string, number]
kite = ['yangyang', 1]

// 枚举

enum Colors {red, yellow, blue}

// 类

// 静态方法 static  不需要实例化直接通过类来调用

// 修饰符 public private protected

// 实现  implements

// 类 实现 接口

// class implements interface

interface Alarm {
    alert(): void
}

interface Light {
    lightOn(): void
    lightOff(): void
}

class Car implements Alarm, Light {
    alert() {
        console.log(1)
    }

    lightOn() {
        console.log(2)
    }

    lightOff() {
        console.log(3)
    }
}

// 接口继承接口

interface A {
    alert(): void
}

interface B extends A {
    prompt(): void
}


// 泛型

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for(let i = 0; i < length; i++){
        result[i] = value
    }
    return result
}

createArray(5, 'y')

function swap<T,U>(tuple: [T,U]): [U,T] {
    return [tuple[1],tuple[0]]
}

swap([7,'yyy'])


