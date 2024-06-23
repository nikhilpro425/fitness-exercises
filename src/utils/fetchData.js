export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '6c12b399a7msh07bbc496e6ffca5p1ad02fjsn6e18e63c3c61' ,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}