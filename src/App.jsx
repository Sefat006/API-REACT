import { useRef } from "react"

const App=()=> {

  let APIData = useRef(null);
  let myPTag = useRef();
  
  const fetchData = async () =>{
    const url = `https://dummyjson.com/products/1`;
    // const res = await fetch(`https://dummyjson.com/products/1`);
    const res = await fetch(url);
     APIData.current = await res.json();    
  }

  const showData = () =>{
    myPTag.current.innerText = JSON.stringify(APIData.current);
  }

  return (
    <div>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData} >Show Data</button>
      <p ref={myPTag}></p>
    </div>
  )
}

export default App;

// 1st button click e data fetch korbo
// tarpor APIData te data store korbo
// tarpor APIData theke data show korbo <p> er moddhe
