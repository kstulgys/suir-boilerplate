import { connect } from "react-redux";

import { createItem, updateItem, removeItem } from "redux/modules/items";
import ItemsList from "components/ItemsList";

const mapState = ({ items }) => ({
  items
});

const actions = {
  createItem,
  updateItem,
  removeItem
};

export default connect(mapState, actions)(ItemsList);
