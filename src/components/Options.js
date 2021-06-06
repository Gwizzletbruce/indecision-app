import React from "react"
import Option from "./Option.js"

//OPTIONS FUNCTIONAL COMPONENT (doesnt have access to this binding)

const Options = (props) => 
    (
        <div>
            <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" 
                    onClick={props.handleDeleteOptions}>Remove All</button>
            
            </div>
            
            <div>
            {props.options.length === 0 && <p className="widget__optionText">Add an option to get started</p>}
            {
                props.options.map((option, index) => 
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                    />)
                   
            
            }
            </div>
            
        </div>
    )


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

export default Options