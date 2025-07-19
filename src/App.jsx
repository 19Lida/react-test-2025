// import { useEffect, useState } from 'react'
// import { getArticlesApi } from './api/articles-api'
import { useState } from 'react';
import './App.css'
// import ArticleList from './components/ArticleList/ArticleList'
// import SearchArticleForm from './components/ArticleList/SearchArticleForm/SearchArticleForm'


function App() {
  const[tasks,setTasks]=useState([])
  const[inputValue,setInputValue]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(inputValue.trim()==='')
      return
    const newTask={
      id:Date.now(),
      text:inputValue,
      completed:false,
    }
    setTasks([...tasks,newTask])
    setInputValue('')
  }
  const toggleTask = (id) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);
};
const deleteTasks=(id)=>{
const filteredTasks=tasks.filter((task)=>task.id!==id)
setTasks(filteredTasks)
}
//   const [articles,setArticles]=useState([])
//   const [isLoading,setIsLoading]=useState(false)
//   const [error,setError]= useState(false)
//   const [page,setPage]=useState(1)
//   const [query,setQuery]=useState('')
//   useEffect(()=>{
// const fetchData=async()=>{
//  try{
//   setError(false)
//   setIsLoading(true)
  
//     const data=await getArticlesApi(query,page)
//   setArticles((prevState)=>[...prevState,...data])
  
//     }catch(e){
//       setError(true)
//     }finally{
//       setIsLoading(false)
//     }
// }
// query && fetchData()
//   },[page,query])

//   const handleSubmit=async(searchQuery)=>{
//   setQuery(searchQuery)
//   // очистимо,що було до цього
//   setArticles([])
//   // починай з першої сторінки 
//   setPage(1)
// }

// const handleLoadMore=()=>{
// setPage(page+1)
// }

  // return (
    // <>
    {/* <SearchArticleForm submit={handleSubmit}/> */}
    
    {/* {articles.length>0 && (<ArticleList articles={articles}/> */}
    {/* )} */}
    {/* {error && <p>Some wrong...</p>} */}
    {/* {isLoading &&(<p>Loading...</p>)} */}
    {/* {articles.length>0 &&<button type='button' onClick={handleLoadMore}>Load more...</button>} */}
    // </>
  
  // )
  return (
    <div className='App'>
      <h1>Список справ</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Нове завдання....'value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
          <button type='submit'>Додати</button>
        </form>
        <ul>
          {tasks.map((task)=>(
             <li key={task.id}>
          <span onClick={() => toggleTask(task.id)}
  style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
>
  {task.text}</span>
          <button onClick={()=>deleteTasks(task.id)}>Видалити</button>
             </li>
          ))}
          
          </ul>
      
    </div>
  );
}

export default App
//  useEffect(()=>{
//   const getArticles=async()=>{
//     try{
//   setIsLoading(true)
//     const data=await getArticlesApi('react')
//   setArticles(data)
  
//     }catch(e){
//       setError(true)
//     }finally{
//       setIsLoading(false)
//     }
  
//   }
//   getArticles()
//  },[])