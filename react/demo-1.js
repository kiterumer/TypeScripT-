import()

// use before
import { add } from './math'
console.log(add(12,22))

// use after
import("./math").then((math) => {
    console.log(math.add(12,11))
})

// React.lazy
// use before 
import OtherComponent from './OtherComponent'
function MyComponent() {
    return (
        <div>
            <OtherComponent />
        </div>
    )
}

// use after
const OtherComponent = React.lazy(() => { import("./OtherComponent")} )

function NyComponent() {
    return (
        <div>
            <OtherComponent />
        </div>
    )
}


// Error boundaries 

import MyErrorBoundary from './MyErrorBoundary'
const OtherComponent = React.lazy(() => import('./OtherComponent'))
const AnotherComponent = React.lazy(() => import('./AnotherComponent'))
const MyComponent = () => (
    <div>
        <MyErrorBoundary>
            <Suspense fallback = {<div>Loading...</div>}>
                <section>
                    <OtherComponent />
                    <AnotherComponent />
                </section>
            </Suspense>
        </MyErrorBoundary>
    </div>
)


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'

const Home = lazy(() => {import('./routes/Home')})
const About = lazy(() => {import('./routes/About')})

const App = () => (
    <Router>
        <Suspense fallback = {<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/about' component={About} />
            </Switch>
        </Suspense>
    </Router>
)

// tree shaking
// 通常用于移除JavaScript上下文中的为引用代码

// Context 
const ThemeContext = React.createContext('light')

class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value='dark'>
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext
    render() {
        return (
            <Button theme={this.context} />
        )
    }
}

// Context会使得组件的复用性变差
// 组件组合(component composition) 有时候是一个比context更好的解决方案

function Page(props) {
    const user = props.user
    const userLink = (
        <Link href={user.permalink}>
            <Avatar user={user} size={props.avatarSize}></Avatar>
        </Link>
    )
    return <PageLayout userLink={userLink}></PageLayout>
}

{/* <Page user={user} avatarSize={avatarSize}></Page> */}

{/* <PageLayout userLink={...} */}

{/* <NavigationBar userLink={...}></NavigationBar> */}

{props.userLink}


// 传递多个子组件
function Page(props){
    const user = props.user
    const content = <Feed user={user}></Feed>
    const topBar= (
        <NavigationBar>
            <Link href={user.permalink}>
                <Avatar user={user} size={props.avatarSize}></Avatar>
            </Link>
        </NavigationBar>
    )
    return (
        <PageLayout 
        topBar={topBar}
        content={content}
        ></PageLayout>
    )
}


// React.createContext
const MyContext = React.createContext(defaultValue)

// Context.Provider
{/* <MyContext.Provider value='hello'/> */}


// Class.contentType

class MyClass extends React.Component {

    static contentType = MyContext

    componentDidMount(){
        let value = this.context
    }
    componentDidUpdate(){
        let value = this.context
    }
    componentWillUnmount(){
        let value = this.context
    }

    render(){
        let value = this.context
    }
}

MyClass.contextType = MyContext

// Context.Consumer









