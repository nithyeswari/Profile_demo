import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  form: formReducer
}

const reducer = combineReducers(reducers)

export const store = createStore(reducer)
 

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
