import React, {useState, useEffect} from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Create() {
  const [words, setWords] = useState("");

  useEffect(() =>{
       console.log(words);
  }, [words]);

  return (
    <div className='container'>
        <TextareaAutosize
            aria-label="maximum height"
            placeholder="Word Hint"
            style={{ width: '50vw', height: '50vh' }}
            value={words}
            onChange={(e) => setWords(e.target.value)}
        />
    </div>
  )
}

export default Create
