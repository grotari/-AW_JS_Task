import React from "react";
import { useLocation } from "react-router-dom";

export const QuotationDetail = () => {
  const location = useLocation();

  const stichwortJoined = location.state.key_word.map(function (k) {
    return k.stichwort;
  });

  return (
    <div className="wrapper" id="single-wrapper">
      <div className="container" id="content" tabIndex={-1}>
        <div className="row">
          <div className="col-md-12 content-area" id="primary">
            <main className="site-main" id="main">
              <article>
                <header className="entry-header">
                  <h1>Detail Information</h1>
                </header>

                <h4 className="entry-title">
                  Stelle: {location.state.display_label}
                  [{parseInt(location.state.legacy_id) + 1}]
                </h4>
                <div className="entry-content">
                  <table className="table table-hover">
                    <tbody>
                      <tr className="detail-info">
                        <th>Summary</th>
                        <td>{location.state.summary}</td>
                      </tr>
                      <tr>
                        <th>Quotation</th>
                        <td>{location.state.zitat}</td>
                      </tr>
                      <tr>
                        <th>Quotation source</th>
                        <td>{location.state.zitat_stelle}</td>
                      </tr>
                      <tr>
                        <th>Translation</th>
                        <td>{location.state.translation}</td>
                      </tr>
                      <tr>
                        <th>From</th>
                        <td>{location.state.start_date}</td>
                      </tr>
                      <tr>
                        <th>To</th>
                        <td>{location.state.end_date}</td>
                      </tr>
                      <tr>
                        <th>Commentar</th>
                        <td>{location.state.kommentar}</td>
                      </tr>
                      <tr>
                        <th>Display label</th>
                        <td>{location.state.display_label}</td>
                      </tr>
                      <tr>
                        <th>Original data</th>
                        <td>{location.state.orig_data_csv}</td>
                      </tr>
                      <tr>
                        <th>Keywords</th>
                        <td>{stichwortJoined.join(",\n")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationDetail;
