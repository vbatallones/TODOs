import React from 'react';

const TodoList = ({handleComplete, list}) => {
console.log(list)
    return (
        <ul>
            {list.map(item => (
                <li
                    className={`complete-${item.complete.toString()}`}
                    key={item._id}
                >
                    <span onClick={() => handleComplete(item._id)}>
                        {item.text}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;