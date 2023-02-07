import React, {useState} from 'react'

export default function Textform(props) {


  const handleUpClick=()=>{
    console.log("upperCase is clicked "+ text)
   let newText=text.toUpperCase()
   setText(newText)
  }
  const handledoClick=()=>{
    console.log("upperCase is clicked "+ text)
    let newText=text.toLowerCase()
   setText(newText)
  }

  const handleOnChange=(event)=>{
    console.log("onChange")
    setText(event.target.value)

  }
  const [text, setText] = useState('');
  return (
    <>
   <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3 ">
      
        <textarea className="form-control" value={text} id="MyBox" rows="9" onChange={handleOnChange}></textarea>
       
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-5" onClick={handledoClick}>convert to lowercase</button>
    </div>
    <div className="container">

      <h2>text summary</h2>
      <p> {text.split(" ").length} words {text.length} character</p>
      <p>{.008* text.split(" ").length} minutes take to read this</p>
      <h4>preview</h4>
      <p>{text}</p>
    </div>
     </>
  )
}
