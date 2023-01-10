import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const BaseURL = process.env.REACT_APP_BASE_URL;

const CoworkingDetailPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [coworking, setCoworking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: response } = await axios.get(
        `${BaseURL}/api/coworkings/${params.id}`
      );
      setCoworking(response);

      setLoading(false);
    };

    fetchData().catch((err) => console.error(err));
  }, [params.id]);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="ui container">
          <h1>{coworking.title}</h1>
          <h3>{coworking.city}</h3>
          <p>{coworking.description}</p>
          <img
            src={`${BaseURL}${coworking.avatar}`}
            alt={`${coworking.title} avatar`}
          />
        </div>
      )}
      <div>
        <Link to="/">
          <button>Back to main</button>
        </Link>
      </div>
    </div>
  );
};

export default CoworkingDetailPage;
