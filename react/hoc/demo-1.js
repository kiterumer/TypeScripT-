// Redux 的 connect 
//  横切关注点问题

class CommentList extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state= {
            comments: DataSource.getComments()
        }
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange)
    }

    handleChange() {
        this.setState({
            comments: DataSource.getComments()
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map((comment) => {
                        (
                            <Comment comment={comment} key={comment.id} />
                        )
                    })
                }
            </div>
        )
    }
}


function withSubscription(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props){
            super(props)
            this.handleChange = this.handleChange.bind(this)
            this.state = {
                data: selectData(DataSource,props)
            }
        }

        render(){
            return (
                <WrappedComponent data={this.state.data} {...this.props} />
            )
        }

    }
}


function logProps(WrappedComponent) {
    return class extends React.Component {
        componentWillReceiveProps(nextProps){
            console.log('Current props', this.props)
            console.log('Next props', nextProps)
        }

        render(){
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
}


//容器组件模式
//HOC 参数化容器组件

// HOC应该透传与自身无关的props

render(){
    const { extraProps, ...passThroughProps } = this.props
    const injectedProps = someStateOrInstanceMethod

    return (
        <WrappedComponent 
        injectedProps={injectedProps}
        {...passThroughProps}
        ></WrappedComponent>
    )
}

//接受一个参数
const NavbarWithRouter = withRouter(Navbar)

const ConnectedComment = connect(commentSelector, commentActions)(CommentList)

//connect是一个返回高阶组件的高阶函数

// compose(f,g,h) 等同于 (...args) => f(g(h(...args)))

//backbone 



