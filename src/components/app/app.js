import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-ad-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
        {name:'Escobar J.Kostuchenko', salary: 3000, increase: false, id: 1},
        {name:'Lora Kostu', salary: 1200, increase: true, id: 2},
        {name:'Esya J.M.Kos', salary: 800, increase: false, id: 3},
        {name:'Oskar Vidik', salary: 5000, increase: false, id: 4}
    ],
    term: ""
        }
        this.maxId = 10;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const efter = data.slice(index +1);
            // const newArr = [...before, ...efter];
            // return { data: newArr };
            // the same 
            return { 
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmployee = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    // onToggleIncrease = (id) => {
    //     this.setState(({data}) =>({ // novui object cvoistva data
    //         data: data.map(item => {// novui massiv (kopia)
    //             if(item.id === id){// iwem nywnui element(object)
    //                 return {...item, increase: !item.increase}// vozvrawaem novui object iz logikoi
    //             }
    //             return item;
    //         })
    //     }))
    // }
    
    onToggleProp = (id, prop) => {
        this.setState(({data}) =>({ 
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render () {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item=> item.increase).length;
        return (
        <div className="app">
            <AppInfo
            employees = {employees}
            increased = {increased}
            />
    
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <div >
                <EmployeersList 
                data = {this.state.data} 
                onDelete={this.deleteItem}
                // onToggleIncrease={this.onToggleIncrease}
                // onToggleRise={this.onToggleRise}
                onToggleProp = {this.onToggleProp}
                />
                <EmployersAddForm
                onAdd = {this.addEmployee}
                    />
            </div>
    
        </div>
     ); 
    }
}

export default App;