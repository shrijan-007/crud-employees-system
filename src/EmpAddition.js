import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import { useState } from "react";
const EmpAddition = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const empData = {name, email, phone, designation};
    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: {"content-type":"application/json"},
      body : JSON.stringify(empData)
    })
      .then((res) => {
        alert("Saved to Server successfully")
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <Link to="/" className="btn btn-outline-primary go-back-btn">
        <ArrowLeftCircle /> Go back
      </Link>
      <div className="form-holder">
        <form className="bg-dark text-light p-4" onSubmit={handleSubmit}>
          <h2 className="mb-4">Add Employee Form</h2>
          <h5>Fill all the below details to add Employee </h5>
          <div className="mb-3 inputField">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 inputField">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 inputField">
            <label htmlFor="phoneInput" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneInput"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 inputField">
            <label htmlFor="designationInput" className="form-label">
              Designation
            </label>
            <input
              type="text"
              className="form-control"
              id="designationInput"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EmpAddition;
