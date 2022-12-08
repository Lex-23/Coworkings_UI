import React, { useState, useEffect } from "react";
import axios from "axios";
import CoworkingList from "./coworking/CoworkingsList";
import CoworkingDetail from "./coworking/CoworkingDetail";
import ReactPaginate from "react-paginate";
import "./pagination/Pagination.css";

const BaseURL = "http://127.0.0.1:8000";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coworkings, setCoworkings] = useState([]);
  const [selectedCoworking, setSelectedCoworking] = useState(null);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const coworkingsPerPage = 2;

  useEffect(() => {
    setSelectedCoworking(coworkings[0]);
  }, [coworkings]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `${BaseURL}/api/coworkings`,
          {
            params: {
              limit: coworkingsPerPage,
              offset: offset,
            },
          }
        );
        setCoworkings(response.results);
        setPageCount(Math.ceil(response.count / coworkingsPerPage));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * coworkingsPerPage);
  };

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <CoworkingDetail coworking={selectedCoworking} />
          </div>
          <div className="five wide column">
            {loading && <div>Loading</div>}
            {!loading && (
              <div>
                <h2>All coworkings list</h2>
                <CoworkingList
                  onCoworkingSelect={setSelectedCoworking}
                  coworkings={coworkings}
                />
              </div>
            )}
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
