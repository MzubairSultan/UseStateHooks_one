// important Note :  state k ander hum string , number , boolean , array , object , or indo ka mixture ko b store kr sakty hy 
import './App.css';
import UsWithArray from './components/UsWithArray';
import UsWithObject from './components/UsWithObject';
import UseState_one from './components/UseState_one';

function App() {
    
  return (
    <div className="App">
       {/* <UseState_one/> */}
       {/* <UsWithObject/> */}
      <UsWithArray/>
     
    </div>
  );
}

export default App;
