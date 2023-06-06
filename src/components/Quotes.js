import React, { useState, useEffect } from 'react';
import './Quotes.css';

function Quotes() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
      headers: {
        'X-Api-Key': '0M1WQ3xGdbOph0WkaBePpA==gLFRzEB6EzRP6J2K',
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        return resp.json();
      })
      .then((apiData) => {
        setData(apiData[0].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error
        {error.message}
      </div>
    );
  }

  return (
    <div className="quote">
      <p>{data}</p>
    </div>
  );
}

export default Quotes;
