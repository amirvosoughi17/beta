import { setUserInfo } from "@/redux/user/userSlice";

export const fetchUserData = () => async (dispatch) => {
    try {
      const response = await fetch('/api/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const {user} = await response.json();
        
        dispatch(setUserInfo(user));
      } else {
        console.error('Failed to fetch user data');

      }
    } catch (error) {
      console.error('An error occurred during the fetch:', error);

    }
  };