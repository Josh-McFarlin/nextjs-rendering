export const fetchCars = async (localUrl = "") => {
  const response = await fetch(`${localUrl}/api/fakeCars`);

  return response.json();
};
