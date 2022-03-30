import Container from "react-bootstrap/esm/Container";
import { Student } from "./Student";
import { useState } from "react";

export function StudentList( {students = []}){

    const [searchTerm, setSearchTerm]= useState("");
    const [searchTag, setSearchTag] = useState("");

    return(
        <Container className=" pt-5 w-75 " >
            <input className="form-control form-control-lg " type="text" placeholder="Search by Name" 
                    onChange={event => {setSearchTerm(event.target.value)}}/>
            

            {students.filter((val)=>{
                if(searchTerm == ""){
                    return val
                }else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        val.lastName.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map( (student) => {
            return <Student key={student.firstName} {...student}/>
        })}

        </Container>
        
    )
}