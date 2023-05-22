import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  EyeFill,
  PencilSquare,
  TrashFill,
  PersonFillAdd,
} from "react-bootstrap-icons";

// import './App.css';
const Emplisting = () => {
  const [employees, setemployees] = useState(null);
  const navigate = useNavigate();
  const ViewEmp = (id) => {
    navigate("/viewEmployee/" + id);
  };
  const EditEmp = (id) => {
    navigate("/editEmployee/" + id);
  };
  const DeleteEmp = (id) => {
    if(window.confirm("Do you want to delete the employee")){fetch("http://localhost:8000/employee/"+id, {
      method: "DELETE",
    })
      .then((res) => {
        alert("removed from server succesfully")
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
}};

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((results) => {
        return results.json();
      })
      .then((resp) => {
        console.log(resp);
        setemployees(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="Emp-listing-container">
        <table className="table table-dark table-striped-columns table-hover">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone No.</td>
              <td>Designation</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.designation}</td>
                  <td className="btn-group">
                    <a
                      onClick={() => {
                        EditEmp(item.id);
                      }}
                      href
                      className="btn btn-outline-success"
                    >
                      <PencilSquare /> Edit
                    </a>
                    <a
                      onClick={() => {
                        ViewEmp(item.id);
                      }}
                      href
                      className="btn btn-outline-primary"
                    >
                      <EyeFill /> View
                    </a>
                    <a
                      onClick={() => {
                        DeleteEmp(item.id);
                      }}
                      href
                      className="btn btn-outline-danger"
                    >
                      <TrashFill /> Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="Add-container">
        <Link to="/addEmployee" className="btn btn-primary">
          <PersonFillAdd /> Add Employee
        </Link>
      </div>
    </>
  );
};

export default Emplisting;
