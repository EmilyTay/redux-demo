import { TOGGLE_LOGIN } from "../constants/action-types";

export function toggleLogin(payload) {
    return { type: TOGGLE_LOGIN, payload }
  };