// import './assets/main.css'
import './index.css'
import { createApp, provide, h } from 'vue';
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { setContext } from '@apollo/client/link/context';
import App from './App.vue'
import router from './router'

const i18n = createI18n({
    // something vue-i18n options here ...
  })

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: 'https://api.start.gg/gql/alpha',
});

const authLink = setContext((_, { headers }) => {
  const token = "b2c01faea07fe0a268f7752f0e21de25";
  // const token = import.meta.env.VITE_APP_TOKEN;

  return {
      headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
      }
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});


const app = createApp({
  setup() {
      provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
