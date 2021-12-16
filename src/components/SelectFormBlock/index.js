import React from 'react';
import styles from './SelectFormBlock.module.css'
import Select from '../Select';
import FormTask from '../FormTask';

const SelectFormBlock = ({setTodo, todoFilter }) => {
    
    return (
        <div className={styles.container}>
            <FormTask setTodo={setTodo} />
            <Select   />
        </div>
    );
}

export default SelectFormBlock;
