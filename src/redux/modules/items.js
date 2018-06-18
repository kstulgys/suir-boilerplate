export const CREATE_ITEM = "CREATE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const REMOVE_ITEM = "DELETE_ITEM";

export const createItem = item => ({
  type: CREATE_ITEM,
  item
});

export const updateItem = item => ({
  type: UPDATE_ITEM,
  item
});

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId
});

const initialState = [
  { id: 1, firstName: "Bob", lastName: "Marley" },
  { id: 2, firstName: "Jhon", lastName: "Smith" },
  { id: 3, firstName: "Tom", lastName: "White" }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, { ...action.item }];

    case UPDATE_ITEM:
      return [
        ...state.filter(other => other.id !== action.item.id),
        { ...action.item }
      ];

    case REMOVE_ITEM:
      return [...state.filter(other => other.id !== action.itemId)];

    default:
      return state;
  }
}
