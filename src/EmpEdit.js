import { useEffect, useState } from "react"
import { useParams, Link, useNavigate} from "react-router-dom";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
const EmpEdit = () => {
    const  {empid}  = useParams();
    const [empData, setEmpData] = useState({}); 
    useEffect(() => {
        fetch("http://localhost:8000/employee/"+empid)
          .then((results) => {
            return results.json();
          })
          .then((resp) => {
            console.log(resp);
            setName(resp.name);
            setPhone(resp.phone);
            setEmail(resp.email);
            setDesignation(resp.designation);
            setEmpData(resp); 
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);
      const [name, setName] = useState(empData.name);
  const [email, setEmail] = useState(empData.email);
  const [phone, setPhone] = useState(empData.phone);
  const [designation, setDesignation] = useState(empData.designation);
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const empData = {name, email, phone, designation};
    fetch("http://localhost:8000/employee/"+empid, {
      method: "PUT",
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
        <ArrowLeftCircleFill /> Go back
      </Link>
      <div className="form-holder">
        <form className="bg-dark text-light p-4" onSubmit={handleSubmit}>
          <h2 className="mb-4">Edit Employee Form</h2>
          <h5>Edit the below details to Change Employee details</h5>
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
    </> );
}
 
export default EmpEdit;