import './App.css';
import {Switch } from 'react-router-dom'
import {Route} from 'react-router-dom'
import ReadStud from './Component/ReadStud';
import UpdateStud from './Component/UpdateStud';
import Dashboard from './Component/Dashboard';
import AddStud from './Component/AddStud';
import data from './Data/data';
import { useEffect, useState } from 'react';
import Teachlist from './Component/Teachlist';
import AddTeach from './Component/AddTeach';
import teachdata from './TeachData/TeachData';
import UpdateTeach from './Component/UpdateTeach';
import TBase from './Base/TBase';
function App() {
  const [Student, setStudent] = useState([]);
  const [Teacher, setTeacher] = useState([])

  useEffect(()=>{
    const getStudent = async ()=>{
        const response = await fetch("https://646366317a9eead6fae5ab94.mockapi.io/Student",{
          method:"GET",
        });
        const data = await response.json();
       if(data){
        setStudent(data)
       }
    }
    getStudent();
  },[])

  useEffect(()=>{
    const getTeacher = async () => {
      const response = await fetch("https://646366317a9eead6fae5ab94.mockapi.io/Teacher",{
        method:"GET",
      });
      const teachdata = await response.json();
      if(teachdata){
        setTeacher(teachdata)
      }
    }
    getTeacher();
  },[])
  
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Dashboard/>
        </Route>

        <Route  path="/studentlist">
        <ReadStud
         Student = {Student}
         setStudent = {setStudent}
        />
        </Route>

        <Route path="/add">
        <AddStud
         Student = {Student}
         setStudent = {setStudent}
        />
        </Route>

        <Route path="/update/:id">
        <UpdateStud
        Student = {Student}
        setStudent = {setStudent}
        />
        </Route>

        <Route path="/Techers">
        <TBase/>
        </Route>

        <Route path="/techerslist">
        <Teachlist
        Teacher = {Teacher}
        setTeacher= {setTeacher}
        />
        </Route>

        <Route path="/addteach">
        <AddTeach
        Teacher = {Teacher}
        setTeacher= {setTeacher}
        />
        </Route>

        <Route path="/updateteach/:id">
        <UpdateTeach
        Teacher = {Teacher}
        setTeacher= {setTeacher}
        />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
