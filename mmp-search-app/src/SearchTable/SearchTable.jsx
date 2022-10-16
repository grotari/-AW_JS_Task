import React from "react";
import { NavLink } from "react-router-dom";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Display label</th>
        <th>Keywords</th>
        <th>Author</th>
        <th>Year</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.quotationsList.map((quotation, index) => {
    const stichwortJoined = quotation.key_word.map((k) => {
      return k.stichwort;
    });

    const authorsJoined = quotation.text.autor.map((t) => {
      return t.name;
    });

    return (
      <tr key={index}>
        <td>
          <NavLink to="quotationDetail" state={quotation}>
            {quotation.text.title}
          </NavLink>
        </td>
        <td>{quotation.display_label}</td>
        <td>{stichwortJoined.join(",\n")}</td>
        <td>{authorsJoined.join(",\n")}</td>
        <td>{[quotation.start_date, quotation.end_date].join("-")}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export const SearchTable = (props) => {
  const { quotationsList, QuotationDetail } = props;
  return (
    <table className="table table-hover">
      <TableHeader />
      <TableBody
        quotationsList={quotationsList}
        QuotationDetail={QuotationDetail}
      />
    </table>
  );
};

export default SearchTable;
