import '../styles/globals.css'
import Header from "../layouts/Header";
import Store from "../store/store";
import {createContext} from "react";

const store = new Store();

export const Context = createContext({
  store,
})

function MyApp({ Component, pageProps }) {
  return(
      <Context.Provider value={{store}}>
        <Header>
            <Component {...pageProps} />
        </Header>
      </Context.Provider>
  )
}

export default MyApp
