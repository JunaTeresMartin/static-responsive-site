import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState('');
  const[isAgeValid,setIsAgeValid]=useState(true)
  const validateInput = (inputTag) => {
    const { name, value } = inputTag;
    console.log(name, value);
    if(name=='age'){
      !!value.match(/^\d*.?\d+$/)
        ? setIsAgeValid(true)
        : setIsAgeValid(false);
    }
  };

  const handleAge=(e)=>{
    e.preventDefault();
    console.log("Inside age handle fn");
  }
  return (
    <div>
      {/* <Header /> */}
      <div className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            name='name'
            type="text"
            className="form-control"
            id="name"
            value={name} 
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            onChange={(e) => {
              setAge(e.target.value);
              validateInput(e.target);
            }}
            name='age'
            type="text"
            className="form-control"
            id="age"
            value={age}
          />
        </div>
        {!isAgeValid && (
          <div className="mb-3 text-danger fw-bolder">
          Invalid Age
        </div>
        )}
      </div>

      {name && (
        <p className="content">
          <strong>
            {" "}
            Hi I am <mark>{name} </mark>
          </strong>
        </p>
      )}
      {age && isAgeValid &&(
        <p className="content">
          <strong> I am {age} years old </strong>
        </p>
      )}
    </div>
  );
}

export default App;
