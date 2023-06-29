import logo from './logo.svg';
import './App.css';

function App() {
  const getLocation=()=>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(success,error)
    }
}
const success=(position)=>{
    console.log(position)
}
const error = ()=>{
    console.log("sorry");
}
getLocation()
  return (
    <div >
      <h1>Please allow to Get Your Location</h1>
    </div>
  );
}

export default App;
