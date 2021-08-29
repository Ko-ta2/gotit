import { InjectionKey } from 'vue';
import { createStore, Store, createLogger  } from 'vuex';

export interface State {
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  strict: import.meta.env.DEV,
  plugins: import.meta.env.DEV ? [createLogger()] : [],
  state:{
  },
  modules: {

  }
});