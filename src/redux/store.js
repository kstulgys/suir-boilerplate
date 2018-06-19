import { applyMiddleware, compose, createStore, combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import items from "redux/modules/items"
import forms from "redux/modules/forms"

const rootReducer = combineReducers({
  items,
  form: formReducer,
  forms
})

const middleware = []
const enhancers = []
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
)

export default store
