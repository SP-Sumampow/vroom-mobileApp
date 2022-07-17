import create from 'zustand';
import {UserStoreType} from './UserStore.types';

const INITIAL_STATES: {
  id: UserStoreType['id'];
  token: UserStoreType['token'];
  refreshToken: UserStoreType['refreshToken'];
} = {
  id: undefined,
  token: undefined,
  refreshToken: undefined,
};

const useUserStore = create<UserStoreType>(set => ({
  ...INITIAL_STATES,
  setUserData: (id: string, token: string, refreshToken: string) => {
    set(() => ({id, token, refreshToken}));
  },
  resetStore: () => set(() => ({...INITIAL_STATES})),
}));

export default useUserStore;
