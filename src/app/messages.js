import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "messages",
  initialState: {
    messageHubs: [],
  },
  reducers: {
    messageHubsLoadded: (state, action) => {
      state.messageHubs = action.payload;
    },
    messageAdded: (state, action) => {
      const message = action.payload;
      console.log(message.messageHubId);
      const index = state.messageHubs.findIndex(
        (mh) => mh.id === message.messageHubId
      );

      if (index !== -1) state.messageHubs[index]?.messages.push(message);
    },
  },
});

export default slice.reducer;

const { messageHubsLoadded, messageAdded } = slice.actions;

export const loadMessageHubs = (messageHubs) => async (dispatch) => {
  dispatch(messageHubsLoadded(messageHubs));
};

export const addMessage = (message) => async (dispatch) => {
  dispatch(messageAdded(message));
};
