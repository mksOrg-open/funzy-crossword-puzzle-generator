import React, {useState, useEffect} from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DisplayCrossword from "../components/CreateCrossword";

function Create() {
  const [words, setWords] = useState("");

  useEffect(() =>{
       console.log(words);
  }, [words]);

  return (
    <div className='container-fluid'>
        <DisplayCrossword words={words} setWords={setWords}/>
    </div>
  )
}

export default Create
