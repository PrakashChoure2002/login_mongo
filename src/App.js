
import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [form, setForm] = useState({});
  
  const [ ,setUsers] = useState([]);

  const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
   console.log(data);
  }

  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/demo',{
      method:'GET',
    })
   const data = await response.json();
   setUsers(data);
  }

  useEffect(()=>{
    getUsers();
  },[])

  return (
  <div className="container">

    
  <h2>Login</h2>
  <form  onClick={handleSubmit}>
    {/* <p>{JSON.stringify(form)}</p> */}
    <div className="input-group">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        // id="username"
        name="username"
        onChange={handleForm}
        
        
        required
      />
    </div>
    <div className="input-group">
      <label htmlFor="password">Password</label>
      <input
         type="password"
        // id="password"
        name="password"
        onChange={handleForm}
        
        
        required
      />
    </div>
    <div className="input-group">
      <input type="submit" value="Login" className="btn" />
    </div>
    
  </form>
  {/* <div>
    <ul>
      {users.map(user=><li key={user._id} >{user.username},{user.password}</li>)}
    </ul>
  </div> */}
</div>


  
    
  );
}

export default App;
