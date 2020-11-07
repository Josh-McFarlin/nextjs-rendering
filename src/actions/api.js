export const fetchCars = async (onClient = true) => {
  const response = await fetch(
    `${!onClient ? "http://localhost:3000" : ""}/api/fakeCars`
  );

  return response.json();
};
