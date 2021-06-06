

let visibility = false

const toggleVisibility = () => {
    this.state = {
        visibility: false
    }

}

class Render extends React.Component {
    constructor(props) {
        super(props)

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)  
        this.state = {
            visibility: false
        }      
    }
    handleToggleVisibility() {
        console.log("hello")
        
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? "Hide Details" : "Show Details"}
            </button>
            {this.state.visibility && (
                <div>
                    <p>These are some details</p>
                </div>
            )}
        </div>
        )
        
    }
}



   


ReactDOM.render(<Render />, document.getElementById("app"))

render()