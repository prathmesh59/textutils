import React,{useState} from "react";
import PropTypes from 'prop-types'


export default function TextForm(props) {
    
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        console.log("Lowercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase ","succes")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        // console.log("handle onchange");
    }
    const clearClick=(event)=>{
        let clear="";
        setText(clear)
        props.showAlert(" Clear ","succes")
        // console.log("handle onchange");
    }
    const copyText=()=> {
        // Get the text field
        var copyText = document.getElementById("exampleFormControlTextarea1");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        props.showAlert(" Copied to Clipboard ","succes")
      
        // Alert the copied text
        // alert("Copied the text: " + copyText.value);
      }
    const handleItalicClick=(event)=>{
        let str="";
        for(let i=0;i<text.length;i++){
            if(text.charAt(i)===" "){
                i++;
                str=str+" "+text.charAt(i).toUpperCase();
                console.log(str);
            }else{
                
                str=str+text.charAt(i);
                console.log(str);
            }
        }
        let newText=str;
        setText(newText);
        console.log(text.length)

    }
      const [text,setText]=useState('');
    return (
        <>
        <div className="container"style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2 className="mb-4">{props.heading}</h2>
            <div className="mb-3">
                <textarea
                    className=" form-control"
                    value={text}
                    onChange={handleOnChange}
                    style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} 
                    id="exampleFormControlTextarea1"
                    rows="8  "
                    ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={clearClick}>Clear Text</button>
            <button className="btn btn-primary mx-3 my-3" onClick={handleItalicClick}>Convert First Letter To UpperCase</button>
            <button className="btn btn-primary mx-3 my-3" onClick={copyText}>Copy text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text Summary</h2> 
            <p>{text.split(" ").length} word and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in textbox above to preview here"}</p>
        </div>
        
        </>
    );
}
TextForm.propTypes={heading:PropTypes.string};

