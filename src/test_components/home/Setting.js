import { Link } from "react-router-dom";

function Setting(){
    return(
        <>
            <h3 className="headColor">Setting</h3>
            <h3 className="headColor-1">Setting</h3>
            <h3 className="headColor-2">Setting</h3>


            <p>links in Page</p>
            
            <div>
                <nav style={{ marginBottom: '20px' }}>
                    <Link className="nav-link" to="/test-form">React Form</Link> 
                    <Link className="nav-link" to="/react-events">React Event</Link>
                </nav> 
            </div>
            
        </>
        // <div style={{ backgroundColor:'blue', float:'left'}}>
        // </div>
    )
}

export default Setting