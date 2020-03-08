import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'cards_aplication',
      storage,
      whitelist: ['person', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
