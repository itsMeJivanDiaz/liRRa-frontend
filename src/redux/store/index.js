import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key: "key",
	root: "root",
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
})

export default store;