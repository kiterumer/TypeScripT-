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

// 根据props来渲染不同组件
const components = {
    photo: PhotoStory,
    video: VideoStory
}

function Story(props){
    const SpecificStory = components[props.storyType]
    return <SpecificStory story={props.story} />
}


const Button = props => {
    const {kind, ...other} = props
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton"
    return <button className={className} {...other} />
}

const App = () => {
    return (
        <div>
            <Button kind="primary" onClick={() => console.log("clicked!")}>
                Hello World!
            </Button>
        </div>
    )
}


//性能优化

// Chrome Performance 标签来分析组件

// concat()不会更改现有数组，返回一个型数组

function updateColorMap(colormap) {
    colormap.right = 'blue'
}

function updateColorMap(colormap){
    return Object.assign({},colormap,{right:'blue'})
}

function updateColorMap(colormap){
    return {...colormap,right:'blue'}
}

// immutable.js  不可变数据结构