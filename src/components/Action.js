import React from "react"

const Action = (props) => 
     (
        <div>
  
          <button className="big-button" onClick={props.handlePick}
          disabled={!props.hasOptions}>
          
          
          What should I do?
          
          </button>
            
          
        </div>
      )


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

export default Action