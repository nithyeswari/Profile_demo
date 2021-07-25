import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { loadState } from './localStore';
const persistedState:any = loadState(); 
const reducers = {
  form: formReducer
} 
const reducer = combineReducers(reducers) 
export const store = createStore(reducer,persistedState) 

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
