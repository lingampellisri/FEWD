import React from "react";
import { useLocation } from "react-router-dom";

// Custom hook to get query parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchParams() {
  const query = useQuery();
  const search = query.get("name");
  const location = useLocation();

  return (
    <div>
      <h2>Search Parameters</h2>
      <p>Search Query: {search}</p>
      <p>Full Search String: {location.search}</p>
    </div>
  );
}

export default SearchParams;
