import React from "react";

const Pagination = (props) => {

    return (
        <>
            <nav >
                <div className='pagination1'>
                    <ul className="pagination">
                        <li className="page-item">
                            <button type="button" className="btn btn-info page-link" onClick={props.previous}>previous
                            </button>
                        </li>
                        <li className="page-item active" aria-current="page">
                            <span className="page-link">{props.page}</span>
                        </li>
                        <li className="page-item">
                            <button type="button" className="btn btn-info page-link" onClick={props.next}>next</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Pagination;