import axios from "axios";
import authService from "./MauthServices";

const checkAuthentication = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/auth/users/dashboardd", {
        withCredentials: true,  
      });
  
      console.log("response kk", response);
      return { isAuthenticated: true, user: response.data.user };
    } catch (error) {
      console.error("Authentication check failed:", error);
  
      if (error.response) {
        console.error("Error response:", error.response);
        console.error("Error status:", error.response.status);
      }
  
      return { isAuthenticated: false };
    }
  };
  

export default checkAuthentication;
