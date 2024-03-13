import { useState } from "react";

function IncDecCounter() {
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // const handleChange = (e) => {
  //   setNum(e.target.value);
  // };

  return (
    <>
      <div style={{width:"25%"}}>
         <div class="input-group no-index">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={decNum}
              
            >
              -
            </button>
          </div>
          <input
            type="text"
            class="form-control"
            value={num}
            onChange={handleChange}
            
           
          />
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={incNum}
            >
              +
            </button>
          </div>
        </div> 

        {/* <div>
          <button onClick={decrement}>-</button>
          <input
            type="text"
            class="form-control"
            value={num}
            onChange={handleChange}
           
          />
          
         
          <button onClick={increment}>+</button>
        </div> */}

      </div>
    </>
  );
}
export default IncDecCounter;
