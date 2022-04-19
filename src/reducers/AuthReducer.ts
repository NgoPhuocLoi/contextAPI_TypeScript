import { AuthActionTypes } from "./types";

const { TOGGLE_AUTH } = AuthActionTypes;

export interface AuthState {
  isAuthenticated: boolean;
  username: string;
}

interface AuthAction {
  type: AuthActionTypes;
  payload: string;
}

export const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
        username: action.payload,
      };
    default:
      return state;
  }
};
