// 在JSX类型中使用点语法来引用一个React组件

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return <div>{props.color}</div>
    }
}

function BlueDatePicker(){
    return <MyComponents.DatePicker color="blue"></MyComponents.DatePicker>
}

// 属性展开

function App1(){
    return <Greeting firstName='Ben' lastName='Hector' />
}

function App2(){
    const props = {
        firstName:'Ben',
        lastName:'Hector'
    }
    return <Greeting {...props} />
}

// 2019.10.10