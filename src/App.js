import { useState, useEffect } from 'react';
import './App.css';
import { StudentList } from "./components/StudentList";
import Container from "react-bootstrap/Container";



function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
    .then((response) => response.json())
    .then(setStudents)
  }, []);


  return (
    <Container className="h-50" >  
      <StudentList students ={students.students} />
    </Container>
  );
}

export default App;
