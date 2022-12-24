import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-ad-form/employers-add-form';
import './app.css';


function App() {
    const data = [
        {name:'Escobar J.Kostuchenko', salary: 3000, increase: false},
        {name:'Lora Kostu', salary: 1200, increase: true},
        {name:'Esya J.M.Kos', salary: 800, increase: false},
        {name:'Oskar Vidik', salary: 5000, increase: false},
    ]
    return (
    <div className="app">
        <AppInfo/>

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        <div >
            <EmployeersList data = {data} />
            <EmployersAddForm/>
        </div>

    </div>
    );
}

export default App;