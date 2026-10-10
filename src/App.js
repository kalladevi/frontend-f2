import "./g.css"
import "./App.css"
const App=() => {
  const handleclick=()=>{
    alert("hi csea")
  }
  const type=(r)=>{
    console.log(r.target.value)
  }
  const name="DONE FOR NOW"
  

  return (
    < div className="body">
    <h1 className="app-title">Welcome to the App</h1>
    <button className="b2" onClick={handleclick}>click</button>
    <input onChange={type} placeholder="enter any name"/>
    <p>{name}</p>
    </div>
    
  );
}
export default App;
