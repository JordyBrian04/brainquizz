import {configureStore} from '@reduxjs/toolkit';
import reducerUsers from './reducerUsers';

export const store = configureStore({
  reducer: {
    brainsQuiz: reducerUsers,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
