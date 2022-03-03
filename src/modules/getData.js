const getData = async (url = '', data = {}) => {
  const response = await fetch(url, data);
  return response.json();
};

export default getData;