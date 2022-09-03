import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type AlertProps } from "@mui/material";

type UIState = {
  notification: {
    open: boolean;
    message: string;
    type: AlertProps["severity"];
  };
};

const initialState: UIState = {
  notification: { open: false, message: "", type: undefined },
};

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {
    notify(state, action: PayloadAction<Partial<UIState["notification"]>>) {
      const { open, message, type } = action.payload ?? {};

      state.notification.open = open ?? false;
      state.notification.message = message ?? "";
      state.notification.type = type;
    },
  },
});

export const uiActions = uiSlice.actions;

export type UiState = ReturnType<typeof uiSlice.getInitialState>;

export default uiSlice;
