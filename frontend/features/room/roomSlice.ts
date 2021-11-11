import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RoomState {
  messages: Message[]
}

const initialState: RoomState = {
  messages: [],
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      state.messages.push({ text: action.payload })
    },
  },
})

export const { addMessage } = roomSlice.actions

export default roomSlice.reducer
