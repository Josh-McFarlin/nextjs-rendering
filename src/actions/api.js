export const fetchCars = async () => {
  const response = await fetch(
    `${
      typeof window === "undefined" ? "http://localhost:3000" : ""
    }/api/fakeCars`
  );

  return response.json();
};
