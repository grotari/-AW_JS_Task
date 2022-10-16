import React, { useState } from "react";
import { SearchTable } from "../SearchTable";

function SearchPassage({ quotationsList }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredQuotations = quotationsList.filter((quotation) => {
    return quotation.zitat.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchTable() {
    if (searchShow) {
      return <SearchTable quotationsList={filteredQuotations} />;
    }
  }

  return (
    <article>
      <header className="entry-header">
        <div className="entry-top-thumbnail">
          <img src="../dist/fundament/images/example-img-1.jpg" alt="" />
        </div>
        <h1 className="entry-title">Search for Passages</h1>
      </header>
      <section className="mb-4">
        <div className="row">
          <div className="col-md-12 mb-md-0 mb-5">
            <div className="col-md-12 d-flex">
              <input
                className="form-control"
                type="search"
                id="search-input"
                placeholder="Search"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="status" />
          </div>
        </div>
      </section>
      {searchTable()}
    </article>
  );
}
export default SearchPassage;
