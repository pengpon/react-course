import React from 'react';

const  List = ({ onSubmit, onChange, text, items}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button type="submit">Submit</button>
            </form>
            <ul>
                { items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default List;