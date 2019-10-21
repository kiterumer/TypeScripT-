// refs
class MyComponent extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    render() {
        return <div ref={this.myRef}></div>          
    }
    
}

const node = this.myRef.current  // 对该节点的引用

// 不能再函数组件上使用ref属性

class CustomTextInput extends React.Component{
    constructor(props){
        super(props)
        this.textInput = React.createRef()
    }

    focusTextInput = () => {
        this.textInput.current.focus()
    }
    render() {
        return (
            <div>
                <input
                  type="text" 
                  ref={this.textInput}
                />
                <input 
                  type="button"
                  value="Focus the text input"
                  onClick={this.focusTextInput}
                />
            </div>
        )
    }
}


