import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import userSlice from '../app4/userSlice/userSlice'

const checkId = (store) => (next) => (action) => {
    if(action.type === "user/addUser") {
        const users = store.getState().user
        users.some(elem => {
            if(elem.id == action.payload.id) {
                action.payload.id = Date.now()
                return true
            }
            next(action); 
        })
    }
    next(action)
}

const checkDate = (store) => (next) => (action) => {
    if (action.type === "user/addUser") {
      const users = store.getState().user;
     users.map((elem) => {
        return {...elem, date: new Date().toLocaleDateString()};
      });
    }
    return next(action);
  };

const store = configureStore({
    reducer: {
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), checkId, checkDate]
})

export default store