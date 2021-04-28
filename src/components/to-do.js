import React, { useState } from 'react';
import TODOList from './to-do-list';

function TODO() {
    const [item, setItem] = useState("");
    const [itemsList, setItemsList] = useState([]);

    const addItem = (e) => {
        e.preventDefault();
        // Creating new item
        if(item.length === 0) return
        var newItem = {
            id: Date.now(),
            text: item
        };
        // Add to the list and clear the item for future new items
        setItemsList(itemsList.concat(newItem));
        setItem("");
    }

    return (
        <div>
            <h1>Hi, Welcome to the TODO app</h1>
            <form onSubmit={(e) => addItem(e)}>
                <label htmlFor="id">Insert item</label><br/>
                <TODOList TODOItems={itemsList}/>
                <br/>
                <input id="id" onChange={(e) => setItem(e.target.value)} value={item}/>
                <button>Add</button>
            </form>
        </div>
    );
}
export default TODO