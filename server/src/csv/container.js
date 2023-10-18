import React, { useState, useEffect } from 'react';

import { getDataFromCsv } from './source';
import Csv from './csv';

function Container() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getDataFromCsv(setData, setError, setLoading);
    
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : data ? (
        <div>
          <Csv initialData={data}></Csv>
        </div>
      ) : null}
    </div>
  );
}

export default Container;
