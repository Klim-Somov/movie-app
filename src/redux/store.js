import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import MovieReducer from "./features/moveSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware(rootSaga);

const store = configureStore({
    reducer: {
        movie: MovieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
