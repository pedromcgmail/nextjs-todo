"use client"
type TodoItemProps = {
    id: string
    title: string
    complete:   boolean
    toggleTodo: (id: string, complete: boolean) => void
    deleteItem: (id: string) => void
    editItem: (id: string, title: string) => void
}

export function TodoItem( {id, title, complete, toggleTodo, deleteItem, editItem}: TodoItemProps){
        return(
            <li className="flex gap-1 items-center justify-between">
            <div>
            <input id={id} type="checkbox" 
                className="cursor-pointer peer" 
                defaultChecked={complete}
                onChange={e => toggleTodo(id, e.target.checked)}/>
            <label htmlFor={id} className="cursor-pointer peer-checked:line-through
            peer-checked:text-green-600">{' '}
            {title}
            </label>  
            </div>  
            <div className="flex row gap-2 justify-between">
            <button className="border border-slate-300
                text-slate-300 px-2 py-1 rounded
                hover:bg-blue-600 focus-within:bg-blue-600
                outkine-none"
                onClick={() => editItem(id, title)}
                >Edit</button>
                    <button className="border border-slate-300
                text-slate-300 px-2 py-1 rounded
                hover:bg-red-700 focus-within:bg-red-700
                outkine-none"
                onClick={() => deleteItem(id)}
                >Delete</button>
            </div>
        </li>
        )
        
    }
