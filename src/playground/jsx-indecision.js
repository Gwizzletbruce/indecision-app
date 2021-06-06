console.log("app.js is running!")


//JSX JavaScript XML

// const info = {
//     title: "This is a react App",
//     subtitle: "Created By Luke Nisbet",
//     options: []
// }

// const appRoot = document.getElementById("app")

// const onFormSubmit = (e) => {
//     e.preventDefault()

//     const option = e.target.elements.option.value

//     if (option) {
//         info.options.push(option)
//         e.target.elements.option.value = ""
//         render()
//     }
// }

// const onRemoveClick = (e) => {
//     e.preventDefault

//     info.options = []

//     render()
// }

// const onMakeDecision = () => {
//     const randNum = Math.floor(Math.random() * info.options.length)
//     const option = info.options[randNum]
//     alert(option)
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{info.title}</h1>
//             {info.subtitle && <p>{info.subtitle}</p>}
//             <p>{info.options.length > 0 ? "Here are your options" : "No Options"}</p>
//             <button onClick={onMakeDecision} disabled={info.options.length === 0}>What should I do?</button>
//             <ol>
//             {
//                 info.options.map((option) => {
//                     return <li key={option}> {option}</li>
                            
//                 })
//             }
//             </ol>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="option"></input>
//                 <button>Add Option</button>
//                 <button onClick={onRemoveClick}>Remove Options</button>
            
//             </form>
//         </div>
//         )

//         ReactDOM.render(template, appRoot)
//     }

//     render()


const app = document.getElementById("app")

let visibility = false

const visClick = (e) => {
    visibility = !visibility
    render()
}


const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={visClick}>{visibility ? "Hide Details" : "Show Details"}</button>
        
        {visibility && (
            <div>
                <p>You should be able to see this when button clicked</p>
            </div>
            )}
        </div>
    
    )

    ReactDOM.render(template, app)
}

render()