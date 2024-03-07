import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice'
import featuresReducer from './features/featuresSlice';

export const store = configureStore({
    reducer : {
        user : userReducer , 
        features: featuresReducer,
    }
})
