import React ,{useState} from "react";
import data from './data';
import Tours from './components/Tours';

const App = () => {

  const [tours,setTours]=useState(data);
  function removeTour(id){
      const newTours=tours.filter(tour => tour.id !== id);
      setTours(newTours);
  }
  if(tours.length==0) {
    return( <div>
         <h2 className="refresh" >
         No Tours Left
         <button className="btn-white" onClick={()=>setTours(data)}>
          Refresh
         </button>
         </h2>
         
         </div>
    ); 

  }
  return <div className="App">
    <Tours tours={tours} removeTour={removeTour}>  </Tours>
  </div>;
};

export default App;
