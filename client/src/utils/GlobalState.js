import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

// To instantiate the global state object
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      cart: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };


  const useStoreContext = () => {
    return useContext(StoreContext);
  };




  export { StoreProvider, useStoreContext };








// createContext will be used to instantiate a new Context object. The more meaningful term we can use here is that we're using it to create the container to hold our global state data and functionality so we can provide it throughout our app!
//useContext is another React Hook that will allow us to use the state created from the createContext function.
//The Provider is a special type of React component that we wrap our application in so it can make the state data that's passed into it as a prop available to all other components. The Consumer is our means of grabbing and using the data that the Provider holds for us.
//With this function, StoreProvider, we instantiate our initial global state with the useProductReducer() function we created earlier. Because that wraps it around the useReducer() Hook from React
//every time we run this useProductReducer() function, we receive the following two items in return:
//state is the most up-to-date version of our global state object.
//dispatch is the method we execute to update our state. It is specifically going to look for an action object passed in as its argument, as we'll soon see.
//create the custom function using the useContext() Hook to be used by the components that actually need the data our <StoreProvider> will be, well . . . providing!