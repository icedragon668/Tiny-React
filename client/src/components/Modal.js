import React from 'react';
import Options from "./Options"

const Modal = ({ handleClose, handleSubmit, show, error, users }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"

    return (
        <>
            {error ?
                <div className="container">
                    <div id="error" className="alert alert-danger">ya'll dun fetgitt'd sum'tng</div>
                    <table className="table table-hover">
                    </table>
                    <button type="button" className="close" onClick={handleClose}>
                RETURN
            </button>
                </div> :
                <div id="myModal" className={showHideClassName} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel"><strong>Kudos</strong></h2>
                            </div>
                            <div className="modal-body" id="kudosEntry">
                                <form className="row justify-content-center">
                                    <select className="col-8" id="userOpt">
                                    <Options users={users}/>
                                    </select>
                                    <textarea className="col-10" id="kudo"></textarea>
                                    <select className="col-8" id="toOpt">
                                    <Options users={users}/>
                                    </select>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" data-dismiss="modal" id="kudosSend" onClick={handleSubmit}>Kudos for
                        You!</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleClose}>No Kudos</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;
