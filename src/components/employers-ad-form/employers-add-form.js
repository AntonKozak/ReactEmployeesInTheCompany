import './employers-add-form.css'

const EmployersAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add ny employee</h3>
            <form className="add-form d-flex">
                <input type="text"
                className="form-control new-post-label"
                placeholder="Employees Name" />
                <input type="number"
                className="form-control new-post-label"
                placeholder="Salary in $" />

                <button type = "submit"
                className="btn btn-outline-light">Register</button>
            </form>
        </div>
    );
}
export default EmployersAddForm;