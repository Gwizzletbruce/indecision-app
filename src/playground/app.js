

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (prevState.options.length !== this.state.options.length) {
            console.log("saving data")
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options", json)
        }
    }
    
    componentDidMount() {
        try {
            const json = localStorage.getItem("options")
            const options = JSON.parse(json)
            console.log("Saving Data")
            if (options) {
                this.setState(() => ({ options }))
            }
        
        } catch (error) {

        }
        
        
    }

    componentWillUnmount() {
        console.log("Compnent did unmount")
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}))
        
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }

    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randNum]
        alert(option)
    }
    
    handleAddOption(option) {
        if (!option) {
            return "Enter valid option"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        }
        
        this.setState((prevState) => ({options: prevState.options.concat([option])}))
    }

    render() {
        const subtitle = "Put your life in the hands of a computer"
        const options = ["Thing 1", "Thing 2", "Thing three"]
        
        return (
            <div>
            
            <Header subtitle={subtitle} />
            <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
            <AddOption 
                handleAddOption={this.handleAddOption}
            />
            
            
            </div>
        )
    }
}

//INDECISION MAIN COMPONENT DEFAULT PROPS

IndecisionApp.defaultProps = {
    options: []
}

//HEADER FUNCTIONAL COMPONENT

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        
        </div>
    )
}

//HEADER DEFAULT PROPS

Header.defaultProps = {
    title: "Indecision"
}

//HEADER CLASS COMPONENT

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
            
//             </div>
//         )
//     }
// }

//FUNCTIONAL COMPONENT (FASTER AND SIMPLER TO WRITE AND TEST)

const Action = (props) => {
    return (
        <div>
  
          <button onClick={props.handlePick}
          disabled={!props.hasOptions}>
          
          
          What should I do?
          
          </button>
            
          
        </div>
      )
}

//CLASS COMPONENT (SLOWER AND SOMETIMES NOT NECSSARY)

// class Action extends React.Component {
//     render() {
//       return (
//         <div>
  
//           <button onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}>
          
          
//           What should I do?
          
//           </button>
            
          
//         </div>
//       )
//     }
//   }

//OPTIONS FUNCTIONAL COMPONENT (doesnt have access to this binding)

const Options = (props) => {
    return (
        <div>
            <h3>Options</h3>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Add an option to get started</p>}
            {
                props.options.map((option) => 
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                    />)
                   
            
            }
        </div>
    )
}

//OPTIONS CLASS COMPONENT (has access to this binding)

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h3>Options</h3>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
                       
                
//                 }
//             </div>
//         )
//     }
// }


//OPTION FUNCTIONAL COMPONENT

const Option = (props) => {
    return (
        <div>
        
            <ol>
        
                <li>
                    {props.optionText}
                    <button onClick={(e) => {
                        props.handleDeleteOption(props.optionText)
                    }
                }>
                         Remove
                    </button>        
                </li>
                
                

            </ol>
        
        </div>
    )
}

//OPTION CLASS COMPONENT 

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
            
//                 <ol>
            
//                     <li>
//                         {this.props.optionText}
                    
//                     </li>        
                    

//                 </ol>
            
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props)

        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        
        const option = e.target.elements.option.value.trim()
        const error =  this.props.handleAddOption(option)
        
        this.setState(() => ({error}))
        
        if (!error) {
            e.target.elements.option.value = ""
        }
    }    

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text"></input>
                    <button>Add Option</button>
                </form>
                
                
            </div>
        )
    }
}

const User = () => {
    return (
        <div>
        
            <p>Name: </p>
            <p>Age: </p> 
       
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))

