import './App.css';
import Person from './components/Person';
import Man from './components/Man';
import Demo from './components/Demo';

function App() {
  return (
    <div className='App-header'>
    <Demo number='1'></Demo>
   <Person name="Utkarsh Srivastava" fName='Anand' age="20"/>
   <Person age="21"/>
   </div>
 
  );
}

export default App;
