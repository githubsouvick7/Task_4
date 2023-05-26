import React, { useState, useEffect } from 'react'


const MyArguments = () => {
  const [argument, setargument] = useState([{ value: "myarg", label: "myarg", answer: "false", selected: true }]);
  const [data, setData] = useState(new Map());
  

  useEffect(() => {

    setvalue();
  }, [argument])

  



  const readArg = (index) => {

    const addargument = document.getElementsByClassName('myarg')[index].value;
    const addarg = [...argument,];

    const argvalue = document.getElementsByClassName('mySelect')[index].value;
    
    console.log(addargument);

    addarg[index] = { value: addargument, label: addargument, answer: argvalue };
    
    console.log(argvalue);

    setargument(addarg);
    
    setvalue();

  }

  const constant = [
    { value: "false", label: "false", answer: "false", selected: true },
    { value: "true", label: "true", answer: "true" },
  ];
  const setvalue = () => {

    argument.map((data, index) => {
      setData(map => new Map(map.set(data.value, data.answer)));
    })

    constant.map((data) => {
      setData(map => new Map(map.set(data.value, data.answer)));
    }
    )
  }
  const addArg = () => {
    const addarg = [...argument, []];
    setargument(addarg);


  }




  return (
    <>
     
        <div>
          {argument.map((data, index) => {
            return (
              <div key={index}>
                <input type="text" value={data.value} name="arg" className='myarg' placeholder='newarg' onChange={(data) => readArg(index)} />
                <select className="mySelect" onChange={() => readArg(index)}>
                  <option value="false">False </option>
                  <option value="true">True</option>
                </select>
              </div>
            )
          })}

        </div>
        <button id="button" onClick={addArg}>+Add Arg</button>

        <br />
    </>
  )
}

export default MyArguments;
