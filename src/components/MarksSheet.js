import React, { useRef } from 'react'

function MarksSheet() {
    let firstNameInputRef = useRef();
    let lastNameInputRef =useRef();
    let rollNumInputRef = useRef();
    let telMarksInputRef = useRef();
    let engMarksInputRef = useRef();
    let math1MarksInputRef = useRef();
    let math2MarksInputRef = useRef();
    let physMarksInputRef = useRef();
    let chemMarksInputRef = useRef();
    let resultParaRef = useRef();
  return (
    <div>
        <form>
            <caption>INTERMEDIATE MPC MarksSheet </caption>
            <div><label>FirstName</label>
            <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>LastName</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>RollNumber</label>
                <input ref={rollNumInputRef}></input>
            </div>
            <div>
                <label>TeluguMarks</label>
                <input ref={telMarksInputRef}></input>
            </div>
            <div>
                <label>EnglishMarks</label>
                <input ref={engMarksInputRef}></input>
            </div>
            <div>
                <label>Mathematics1</label>
                <input ref={math1MarksInputRef}></input>
            </div>
            <div>
                <label>Mathematics2</label>
                <input ref={math2MarksInputRef}></input>
            </div>
            <div>
                <label>Physics</label>
                <input ref={physMarksInputRef}></input>
            </div>
            <div>
                <label>Chemistry</label>
                <input ref={chemMarksInputRef}></input>
            </div>
            <div>
                <button type="button" onClick={()=>{
                    let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    rollNumInputRef.current.value =("208B1A0514");
                    let telMarks = Number(telMarksInputRef.current.value);
                    let engMarks = Number(engMarksInputRef.current.value);
                    let math1Marks = Number(math1MarksInputRef.current.value);
                    let math2Marks = Number(math2MarksInputRef.current.value);
                    let physMarks = Number(physMarksInputRef.current.value);
                    let chemMarks = Number(chemMarksInputRef.current.value);
                    let totalMarks = telMarks+engMarks+math1Marks+math2Marks+physMarks+chemMarks;
                    let percentage = (totalMarks/600)*100;
                    resultParaRef.current.innerHTML = `${firstName} ${lastName} got ${totalMarks} in percentage ${percentage}`
                }}>Click here for results</button>
            </div>
            <div>
                <p ref={resultParaRef}>REULTS</p>
            </div>
        </form>
      
    </div>
  )
}

export default MarksSheet







