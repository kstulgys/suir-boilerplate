export const CREATE_ITEM = "CREATE_ITEM"
export const UPDATE_ITEM = "UPDATE_ITEM"
export const REMOVE_ITEM = "DELETE_ITEM"

export const createItem = item => ({
  type: CREATE_ITEM,
  item
})

export const updateItem = item => ({
  type: UPDATE_ITEM,
  item
})

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId
})

const initialState = [
  {
    id: 1,
    name: "Locations",
    form: [
      { prop1: "some value 3", prop2: "some value 3" },
      { prop1: "some value 3", prop2: "some value 3" },
      { prop1: "some value 1", prop2: "some value 2" }
    ]
  },
  {
    id: 2,
    name: "ANZ info",

    form: [
      { prop1: "some value 3", prop2: "some value 3" },
      { prop1: "some value 3", prop2: "some value 3" },
      { prop1: "some value 1", prop2: "some value 2" }
    ]
  },
  {
    id: 3,
    name: "AUS info",
    form: [
      { prop1: "some value 3", prop2: "some value 3" },
      { prop1: "some value 3", prop2: "some value 3" },
      { prop1: "some value 1", prop2: "some value 2" }
    ]
  }
]

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, { ...action.item }]
    default:
      return state
  }
}
