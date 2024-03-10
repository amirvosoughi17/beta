"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, selectUsers, selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import { fetchAllUsers } from '@/utils/userActions';
import { useRouter } from 'next/navigation';
//mui
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import DashboardLayout from '@/components/DashboardLayout';

const Admin = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    basePrice: '',
    description: '',
    features: [],
  });
  const [featureData, setFeatureData] = useState({
    featureName: '',
    featurePrice: '',
  });



  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo.role !== 'admin') {
      router.push('/login');
    }
  }, [userInfo, router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeatureChange = (e) => {
    setFeatureData({
      ...featureData,
      [e.target.name]: e.target.value,
    });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [
        ...formData.features,
        {
          name: featureData.featureName,
          price: parseFloat(featureData.featurePrice),
        },
      ],
    });
    setFeatureData({
      featureName: '',
      featurePrice: '',
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const res = await fetch('/api/plans', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        console.log('Plan added successfully!');
        router.refresh();
        alert("plan created successFully")
      } else {
        console.error('Failed to add plan:', res.statusText);
      }
    } catch (error) {
      console.error('Failed to add plan:', error);
    }
  };

  return (
    <DashboardLayout>
      <div className='py-10 px-10 w-full min-h-screen bg-[#0D0F14]'>
        <div className="w-full mr-0 lg:w-[80%] lg:mr-[200px]   md:h-[740px] flex flex-col gap-6">
          <div className="w-full bg-[#171B24] md:h-[250px] border-[1px] border-slate-700/30 shadow-md rounded-xl py-7 px-5 lg:px-4 xl:px-8">
          </div>
          <div className="w-full bg-[#171B24] min-h-[450px] overflow-y-auto border-[1px] border-slate-700/30 shadow-md  rounded-xl py-5 sm:px-4 md:px-8 ">
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Admin;

// <div className='py-10 px-10'>
//   <h1>welcome admin </h1>
// <div>
//   <h2>User List</h2>
//   <ul>
//     {users && users.length > 0 ? (
//       users.map((user) => <li key={user._id}>{user.username}</li>)
//     ) : (
//       <p>No users available.</p>
//     )}
//   </ul>
// </div>
//   <div className="">
//     <form onSubmit={handleSubmit} className='flex flex-col items-center gap-6'>
//       <label>
//         Name:
//         <input
//           className='bg-gray-100 px-5 py-2 m-4 rounded-xl'
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Base Price:
//         <input
//           className='bg-gray-100 px-5 py-2 m-4 rounded-xl'
//           type="text"
//           name="basePrice"
//           value={formData.basePrice}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Description:
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//       </label>
//       <h2 className='text-2xl mt-10'>Features</h2>
//       {formData.features.map((feature, index) => (
//         <div key={index} className='my-2 bg-gray-200 px-7 py-4 rounded-xl'>
//           <p>{feature.name} - ${feature.price}</p>
//         </div>
//       ))}
//       <label>
//         Feature Name:
//         <input
//           className='bg-gray-100 px-5 py-2 m-4 rounded-xl'
//           type="text"
//           name="featureName"
//           value={featureData.featureName}
//           onChange={handleFeatureChange}
//         />
//       </label>

//       <label>
//         Feature Price:
//         <input
//           className='bg-gray-100 px-5 py-2 m-4 rounded-xl'
//           type="text"
//           name="featurePrice"
//           value={featureData.featurePrice}
//           onChange={handleFeatureChange}
//         />
//       </label>
//       <br />
//       <button className='bg-slate-500 text-white px-5 py-2 rounded-xl ' type="button" onClick={addFeature}>
//         Add Feature
//       </button>

//       <button className='bg-slate-500 text-white px-5 py-2 rounded-xl ' type="submit">Add Plan</button>
//     </form>
//   </div>
// </div>