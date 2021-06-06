import React from "react"
import AddOption from "./AddOption.js"
import Header from "./Header.js"
import Action from "./Action.js"
import Options from "./Options.js"
import OptionModal from "./OptionModal.js"

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
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

    closeModal = () => {
        this.setState((prevState) => ({selectedOption: !prevState}))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
        
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randNum]
        this.setState(() => ({
            selectedOption: option
        }))
    }
    
    handleAddOption = (option) => {
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
            <div className="container">
            <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
            <div className="widget">
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
            <AddOption 
                handleAddOption={this.handleAddOption}
            />
            </div>
            
            <OptionModal 
                closeModal={this.closeModal} 
                selectedOption={this.state.selectedOption}
                appElement={this.state.selectedOption}
               
                />
             </div>   
            
            </div>
        )
    }
}

//INDECISION MAIN COMPONENT DEFAULT PROPS

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp