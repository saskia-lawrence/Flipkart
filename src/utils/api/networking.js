// Helper: Build URL with query parameters
const buildUrlWithParams = (url, params) => {
  const query = new URLSearchParams(params).toString();
  return query ? `${url}?${query}` : url;
};

// POST API function
export const PostApi = async (url, data = "") => {
  if (!url) {
    console.error("POST request failed: URL is undefined or null.");
    return {
      status: "F",
      message: "Invalid URL passed to PostApi",
    };
  }

  try {
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("POST request failed:", error);
    return {
      status: "F",
      message: error?.message || String(error) || "No response from server",
    };
  }
};

// GET API function
export const GetApi = async (url, data = "") => {
  if (!url) {
    console.error("GET request failed: URL is undefined or null.");
    return {
      status: "F",
      message: "Invalid URL passed to GetApi",
    };
  }

  try {
    const fullUrl = data ? buildUrlWithParams(url, data) : url;
    const fullUrlStr =
      typeof fullUrl === "string" ? fullUrl : fullUrl?.toString?.();

    if (!fullUrlStr) {
      throw new Error("Invalid or missing URL");
    }

    const response = await fetch(fullUrlStr, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("GET request failed:", error);
    return {
      status: "F",
      message: error?.message || String(error) || "No response from server",
    };
  }
};
