import { UPDATE_COUNTER_TYPES } from "./types";

export const updateCounter = counter => {
    return { type: UPDATE_COUNTER_TYPES, payload: counter };
}