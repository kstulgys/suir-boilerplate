import React from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { Grid, Image, Segment } from "semantic-ui-react";
import { Provider } from "react-redux";
import store from "redux/store";
import ItemsContainer from "containers/ItemsContainer";
import SearchItemsContainer from "containers/SearchItemsContainer";
import AddItemFormContainer from "containers/AddItemFormContainer";

const App = () => (
  <Grid centered columns={2}>
    <SearchItemsContainer />
    <AddItemFormContainer />
    <ItemsContainer />
  </Grid>
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById("root"));
