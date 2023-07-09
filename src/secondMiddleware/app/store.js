import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/data/dataSlice'

const addDate = () => (next) => (action)=>{
  if (action.type === 'data/addData'){
    action.payload.registerDate = new Date().toLocaleString()
  }
  next(action)
}

const checkId = (store) => (next) => (action) =>{
  if (action.type === 'data/addData') {
    const data = store.getState().data
    const isExist = data.some(item => item.id == action.payload.id)
    isExist && (action.payload.id = String(Date.now()).slice(8));
  }
  next(action)
}

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(),addDate,checkId]
});

export default store;