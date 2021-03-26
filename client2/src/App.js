import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPets from './components/AllPets';
import { Router } from '@reach/router';
import AddPet from './components/AddPet';
import PetDetails from './components/PetDetails';
import EditPet from './components/EditPet';


function App() {
  return (
    <div className="App">
      <h1 class="green">Pet Shelter</h1>
      <Router>
        <AllPets path="/" />
        <AddPet path="/new" />
        <PetDetails path="/pets/:id" />
        <EditPet path="/pets/update/:id" />
      </Router>
    </div>
  );
}

export default App;
