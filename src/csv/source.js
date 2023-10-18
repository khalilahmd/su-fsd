export const getDataFromCsv = (setData, setError, setLoading) => {
    fetch('http://localhost:9000/csv')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
};

export default getDataFromCsv;