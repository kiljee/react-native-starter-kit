// @flow

import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../state/rootReducer';

export default function configureStore(initialState: any) {
    const persistConfig = {
        key: 'root',
        storage,
        stateReconciler: autoMergeLevel2,
        whitelist: []
    };

    const persistedReducers = persistReducer(
        persistConfig,
        rootReducer
      );

    const store = createStore(
        persistedReducers,
        initialState
    )

    return store;

}