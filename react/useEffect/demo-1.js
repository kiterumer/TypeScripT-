// class组件发请求
class Article extends Component {
    state = {
        article: null
    }

    componentDidMount() {
        this.fetchData(this.props.id)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.id !== this.props.id) {
            this.fetchData(this.props.id)
        }
    }

    async fetchData(id) {
        const article = await API.fetchArticle(id)
        this.setState({ article })
    }
}

// useEffect中使用async/await
function Article({id}) {
    const [article,setArticle] = useState(null)

    useEffect(() => {
        let didCancle = false

        async function fetchData() {
            const article = await API.fetchArticle(id)
            if(!didCancle) {
                setArticle(article)
            }
        }

        fetchData()

        return () => {
            didCancle = true
        }
    },[id])
}

// 依赖项

function Counter() {
    const [count,setCount] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setCount(count + 1)
        },1000)
        return () => clearInterval(id)
    },[count])
    
    // 移除依赖项，effect只运行了一次
    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1)
        },1000)

        return () => clearInterval(id)
    },[])

    return <h1>{count}</h1>
}

function Counter() {
    const [count,setCount] = useState(0)
    const [step,setStep] = useState(1)

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + step)
        },1000)

        return () => clearInterval(id)
    },[step])

    return (
        <>
          <h1>{count}</h1>
          <input value={step} onChange={e => setStep(Number(e.target.value))}></input>
        </>
    )
}

// useReducer
function Counter() {
    const [state,dispatch] = useReducer(reducer,initialState)
    const { count, step } = state

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({type: 'tick'})
        },1000)
        return () => clearInterval(id)
    },[dispatch])

    const onStepChange = (e) => {
        dispatch({
            type: 'step',
            step: Number(e.target.value)
        })
    }

    return (
        <>
          <h1>{count}</h1>
          <input value={step} onChange={onStepChange} 
          />
        </>
    )
}

const initialState = {
    count: 0,
    step: 1
}

function reducer(state,action) {
    const {count,step} = state
    if(action.type === 'tick'){
        return {count: count + step, step}
    }else if(action.type === 'step'){
        return {count, step: action.step}
    }else{
        throw new Error()
    }
}

function Counter({step}){
    const [count,dispatch] = useReducer(reducer,0)

    function reducer(state,action) {
        if(action.type === 'tick'){
            return state + step
        }else{
            throw new Error()
        }
    }

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({type: 'tick'})
        },1000)
        return () => clearInterval(id)
    },[dispatch])

    return <h1>{count}</h1>
}

function SearchResults() {
    const [query,setQuery] = useState('react')

    useEffect(() => {
        function getFetchUrl() {
            return 'qq.com' + query
        }

        async function fetchData() {
            const result = await axios(getFetchUrl())
            setData(result.data)
        }

        fetchData()
    },[query])
}

// useCallback
function SearchResults() {
    const [query,setQuery] = useState('react')

    const getFetchUrl = useCallback(() => {
        return 'qq.com' + query
    },[query])

    useEffect(() => {
        const url = getFetchUrl()

    },[getFetchUrl])
}





