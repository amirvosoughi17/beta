"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, selectUsers  , selectUserInfo} from '@/redux/user/userSlice';
import { fetchAllUsers } from '@/utils/userActions';
import { useRouter } from 'next/navigation';  

const Admin = () => {

  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const users = useSelector(selectUsers);
  const router = useRouter();  

  useEffect(() => {
    dispatch(setUserInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo.role !== 'admin') {
      router.push('/login');
    }
  }, [userInfo, router]);

  return (
    <div>
      <h1>welcome admin </h1>
      <div>
        <h2>User List</h2>
        <ul>
          {users && users.length > 0 ? (
            users.map((user) => <li key={user._id}>{user.username}</li>)
          ) : (
            <p>No users available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
