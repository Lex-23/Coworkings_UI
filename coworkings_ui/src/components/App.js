import React, { useState, useEffect } from "react";
import axios from "axios";
import CoworkingList from "./coworking/CoworkingsList";
import CoworkingDetail from "./coworking/CoworkingDetail";

const BaseURL = "http://127.0.0.1:8000";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coworkings, setCoworkings] = useState([]);
  const [selectedCoworking, setSelectedCoworking] = useState(null);

  useEffect(() => {
    setSelectedCoworking(coworkings[0]);
  }, [coworkings]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `${BaseURL}/api/coworkings/`
        );
        setCoworkings(response.results);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
