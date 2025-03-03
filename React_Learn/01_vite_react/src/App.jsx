import Chai from "./chai";

function App() {
  const username = "chai r code";

  return (
    <>
      <Chai />
      <h1>hello</h1>
      <p>chai r react {username}</p>
      //                 | 
      //                 v 
      //         evaluated expression(we wont write entire js but we write the
      //outcome of js which has been evaluated)
    </>
  );
}

export default App;
