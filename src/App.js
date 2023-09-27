import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.css'
import { useState } from 'react';



function App() {



  const [todos, setTodos] = useState([
    {
      text: 'step1'
    },
    {
      text: 'step2'
    },
    {
      text: 'step3'
    }
  ])

  const [text, setText] = useState('')



  function handleChange(e){
    setText(e.target.value)

  }

  function handleBtn() {
    setTodos([
      ...todos,
      {
        text: text
      },
  
    ])
  }

  console.log(text);
  return (

    
    <div className='container p-4'>


      <input placeholder='log' value={text} onChange={handleChange} />     {/*а еще можно просто написать название функции в событии onChange={handleChange}*/} 
      <button onClick={handleBtn}>Log in</button> 
      
      {
      todos.map((item, index) => {
        return(
          <div key={index}>
           {item.text}
          </div>
        )
      })
      }   
   
    </div>




    


  )








    

}

export default App;
