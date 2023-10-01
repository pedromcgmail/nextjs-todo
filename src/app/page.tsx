import { TodoItem } from "@/components/TodoItem"
import { prisma } from "@/db"
import Link from "next/link"

const getTodos = () => {
  return  prisma.todo.findMany()
}

const toggleTodo = async (id: string, complete: boolean) => {
  "use server"
   await prisma.todo.update({where: {id}, data:{complete}})
}

const deleteItem = async (id: string) => {
  "use server"
  await prisma.todo.delete({where: {id: id}})
}

const editItem = async (id: string, title: string) => {
  "use server"
  await prisma.todo.update({where: {id}, data:{title}})
  console.log(id, title)
}

export default async function Home(){
  const todos = await getTodos()
  
  //await prisma.todo.create({data: {title: 'Ir al hospital', complete: false}})
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-3xl">Todos</h1>
        <Link 
          className="border border-slate-300
          text-slate-300 px-2 py-1 rounded
          hover:bg-green-600 focus-within:bg-green-600
          outkine-none" href="/newTodo">New Todo</Link>
      </header>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} 
            toggleTodo={toggleTodo}
             deleteItem={deleteItem}
             editItem={editItem}/>
          
        ))}
      </ul>
    </>
  )
}