import React from 'react';
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from './createCrossword.modules.scss';

const DisplayCrossword = ({words, setWords}) => {

    return (
        <div className={styles.crossWordScreen}>
            <TextareaAutosize
                aria-label="maximum height"
                placeholder="Word Hint"
                style={{ width: '50vw', height: '50vh' }}
                value={words}
                onChange={(e) => setWords(e.target.value)}
            />
            <div>
                * Display Crossword Preview here *
            </div>
        </div>
    )
}

export default DisplayCrossword;