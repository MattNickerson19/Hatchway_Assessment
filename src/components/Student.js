import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";



export function Student({firstName, lastName, email, company, skill, grades = [], pic}){

    const [showGrades, setShowGrades] = useState(false);
    const [tags, setTags] = useState([]);
    
    let total = 0;
    for (let i=0; i < grades.length; i++){
        total += parseInt(grades[i]);
    }
    let average = total/grades.length;
    average = average.toFixed(2);
    var fullName = firstName.toUpperCase() +" "+ lastName.toUpperCase();
    var tagsList = [];

    

    
    
    return(
        <Container className = "bg-white border p-1" >
            <Row >
                <Col className="p-5" xl={3} lg={3} md={3} sm={3} xs={3}>
                    <img width="75%" src={pic} className="border border-dark"></img>
                </Col>
                <Col>
                    <h1>{fullName}</h1>
                    <p className="px-3 m-0">Email: {email}</p>
                    <p className="px-3 m-0">Company: {company}</p>
                    <p className="px-3 m-0">Skill: {skill}</p>
                    <p className="px-3">Average: {average}%</p>
                    
                    <ul>
                    {showGrades &&
                        grades.map((grade, i) =>{
                            return <li>Test {i+1}: {grade}%</li>
                        })}
                    </ul>
                    {tags.map((tag) => {
                        return <p className="tag">{tag}</p>
                    })}
                    <input className="input" type="text" placeholder="Add a tag" onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            tagsList.push(event.target.value)
                            setTags(tagsList)
                            event.target.value = "";
                            
                        }
                      }}/>
 
                </Col>
                <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                    {!showGrades &&
                        <img src={"images/plus.png"} className="button" onClick={() => {
                            setShowGrades(!showGrades);}}/>
                        }
                    {showGrades &&
                        <img src={"images/minus.png"} className="button" onClick={() => {
                            setShowGrades(!showGrades);}}/>
                        }
                    
                </Col>
            </Row>
        </Container>
    )
    
  

    
}