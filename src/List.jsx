import React, { useState} from "react";

const List = () =>
{
    const [items, setItems]= useState([]);
    const [newItem, setNewItem] = useState("");
    const handleSubmit =(e)=>
    {
        e.preventDefault();
        setItems([...items,newItem]);
        setNewItem("");
    }

    const deleteone = (e) =>
    {
        e.preventDefault();
    }

    return(
    <div>
     <form onSubmit={handleSubmit}>
     <label>
     AddItem:
    <input type="text"  value={newItem}  onChange={(e) => setNewItem(e.target.value)}/>
    </label>
    <input type="submit" value="Submit" />
   </form>
   <div>
    <ul>
        {items.map((item,index)=>
        (
          <li key="item">{item}</li>  
        )  
        )}
    </ul>
   </div>

   <button onclick={deleteone}> Delete</button>
     </div>
    )
}
export default List;
