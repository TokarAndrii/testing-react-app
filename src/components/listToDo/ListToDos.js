import React, { useEffect } from 'react';
import styles from './ListToDos.module.css'

const ListToDos = ({ toDos, getToDos }) => {
    useEffect(() => {
        getToDos();
    }, [getToDos, toDos.lengths]);

    return (
        <>
            {toDos.length < 1 && <div>Empty</div>}

            {toDos.length >= 0 && (
                <ul className={styles.todoList}>
                    {toDos.map(toDo => {
                        return (
                            <li className={styles.todoItem} key={toDo.id}>
                                <h3>{toDo.title}</h3>
                                <div>{toDo.body}</div>
                            </li>)
                    })}
                </ul>)}

        </>

    )
};


export default ListToDos;
