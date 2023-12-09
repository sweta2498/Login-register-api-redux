import { ActionTypes } from "./ActionType";

const initialState = {
  email: "sweta",
  password: "sweta",
}

const initialStates = {
  open: false,
  message: "",
  type: "success",
}

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_LOGIN:
      return { ...action.payload };
    case ActionTypes.SET_LOGOUT:
      return {
        email: "",
        password: ""
      }

    default:
      return state;

  }
}

export function SnackReducer(state = initialStates, action) {
  switch (action.type) {
    case ActionTypes.SET_SNACKBAR:
      return { ...action.payload };

    default:
      return state;

  }
}
