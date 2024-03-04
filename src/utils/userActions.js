import { setUserInfo , setUsers } from "@/redux/user/userSlice";

export const fetchUserData = () => async (dispatch) => {
    try {
      const res = await fetch('/api/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (res.ok) {
        const {user} = await res.json();
        
        dispatch(setUserInfo(user));
      } else {
        console.error('Failed to fetch user data');

      }
    } catch (error) {
      console.error('error', error);

    }
  };
  export const fetchAllUsers = () => async (dispatch) => {
    try {
      const res = await fetch('/api/admin', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (res.ok) {
        const {users} = await res.json();
        dispatch(setUsers(users));
      } else {
        console.error('Failed to fetch all users');
      }
    } catch (error) {``
      console.error('Error', error);
    }
  };
  