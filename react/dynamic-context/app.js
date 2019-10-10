import {ThemeContext, themes} from './theme-context'
import {ThemedButton} from './themed-button'
import ThemeToggleButton from './theme-toggle-button'

function ToolBar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            theme: themes.light
        }
    }

    toggleTheme = () => {
        this.setState( state => {
            theme:
              state.theme === themes.dark?themes.light:themes.dark
        })
    }

    state = {
        theme: themes.light,
        toggleTheme: this.toggleTheme
    }

    render(){
        return (
            <Page>
                <ThemeContext.Provider value={this.state}>
                    {/* <ToolBar changeTheme={this.toggleTheme}></ToolBar> */}
                    <Content />
                </ThemeContext.Provider>
                {/* <Section>
                    <ThemedButton />
                </Section> */}
            </Page>           
        )
    }
}

function Content(){
    return (
        <div>
            <ThemeToggleButton />
        </div>
    )
}
ReactDOM.render(<App />,document.root)

