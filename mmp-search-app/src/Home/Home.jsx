import React from "react";
import data from "../input/data.json";
import SearchPassage from "../SearchPassage/SearchPassage";

export const Home = () => {
  const quotationsList = data.results;
  console.log(quotationsList, "quotationsList");

  return (
    <div className="wrapper" id="single-wrapper">
      <div className="container" id="content" tabIndex={-1}>
        <div className="row">
          <div className="col-md-12 content-area" id="primary">
            <main className="site-main" id="main">
              <SearchPassage quotationsList={quotationsList} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;