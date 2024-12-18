export const API_CONFIG = {
  BASE_URL:
    process.env.NEXT_PUBLIC_API_URL || "https://apa-hotel.onrender.com/api",
  ENDPOINTS: {
    AUTH: {
      LOGIN: "/users/login",
      LOGOUT: "/users/logout",
      ME: "/users/me",
    },
    REVIEWS: {
      BASE: "/reviews",
      DETAIL: (id: string) => `/reviews/${id}`,
    },
    HOTELS: {
      INFO: (id: string) => `/hotels/${id}`,
      CUSTOM_INFO: (id: string) => `/hotels/${id}/custom-info`,
    },
  },
};
