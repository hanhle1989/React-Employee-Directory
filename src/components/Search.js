import React from "react";


function Search(props) {
    return (
        <div className="container-flex">
            <div className="container">
                <form className="g-3 form-width" onSubmit={props.handleFormSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search for an employee by name"
                        aria-label="default input example"
                        onChange={props.handleInputChange}
                        id="search" />
                </form>
            </div>
        </div>
    );
}

export default Search;