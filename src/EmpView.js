import { useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeftCircle } from "react-bootstrap-icons";


const EmpView = () => {
    const  {empid}  = useParams();
    const [empData, setEmpData] = useState({}); 
    useEffect(() => {
        fetch("http://localhost:8000/employee/"+empid)
          .then((results) => {
            return results.json();
          })
          .then((resp) => {
            console.log(resp);
            setEmpData(resp); 
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);
    //   const script  = <h1> </h1>
    return ( <>
        <div>

            <h3>Employee ID : <i>{empData && empData.id}</i></h3>
            <h3>Employee Name : <i>{empData && empData.name}</i></h3>
            <h3>Phone No. : <i>{empData && empData.phone}</i></h3>
            <h3>Email :<i> {empData && empData.email}</i></h3>
            <h3>Designation : <i>{empData && empData.designation}</i></h3>
            
        </div>
        <Link to="/" className="btn btn-outline-primary go-back-btn">
        <ArrowLeftCircle /> Go back
      </Link>
    </> );
}
 
export default EmpView;