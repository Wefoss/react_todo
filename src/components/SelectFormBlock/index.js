import React from 'react';
import styles from './SelectFormBlock.module.css'
import Select from '../Select';
import FormTask from '../FormTask';

const SelectFormBlock = ({setTodo, todoFilter, selectSet}) => {
    
    return (
        <div className={styles.container}>
            <FormTask setTodo={setTodo} />
            <Select  selectSet={selectSet} />
        </div>
    );
}

export default SelectFormBlock;
