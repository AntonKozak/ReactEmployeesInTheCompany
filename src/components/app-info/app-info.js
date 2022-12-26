import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return(
        <div className="app-info">
            <h1>Employees in the company </h1>
            <h2>Quantity of employees members: {employees}</h2>
            <h2>Bonus gonna get:  {increased}</h2>
        </div>
    );
}

export default AppInfo;