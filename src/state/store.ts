import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/combiner'

export const store = configureStore({reducer: reducers });