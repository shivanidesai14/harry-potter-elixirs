export const fetchElixirs = async (filters = {}) => {
    try {
      // Construct query parameters dynamically
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value.trim()) queryParams.append(key, value);
      });
  
      const url = `https://wizard-world-api.herokuapp.com/elixirs${queryParams.toString() ? `?${queryParams}` : ""}`;
      console.log("Fetching from URL:", url); // Debugging URL
  
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch elixirs");
  
      return await response.json();
    } catch (error) {
      console.error("API Fetch Error:", error);
      return [];
    }
  };
  