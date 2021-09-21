import React, {useContext} from "react";
import propTypes from "prop-types";
import Context from "../Context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:' 0.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: `20px`,
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    input: {
        marginRight: '1rem',
    }

}

 function TodoItem ({ todo, index, onChange }) {
     const {removeTodo} = useContext(Context);
    const classes = [];
    if (todo.completed) {
        classes.push('done');
    }
    return (
        
        <li style={ styles.li }>
            <span className={classes.join(' ')}>
                <input 
                style={styles.input} 
                type="checkbox" 
                onChange={() => onChange(todo.id)}
                checked={todo.completed}
                />
                {index+1}
                &nbsp;
                { todo.title }
            </span>
            <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
};

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    index: propTypes.number.isRequired,
    onChange: propTypes.func.isRequired
}

export default TodoItem;