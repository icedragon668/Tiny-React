import React from 'react';
import Kudos from "./Kudos"


const Body = (props) => {   
    return(
            <div className="row">
            <div className="col-md-3">
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" id="submit" onClick={props.handleModal}>Give 'em A Kudo!</button>
                </form>
            </div>
            <div className="col-md-9">
            <Kudos data={props.data} />
            </div>
        </div>
        )}

export default Body;
