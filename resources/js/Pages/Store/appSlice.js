import { createSlice } from '@reduxjs/toolkit';

 const appSlice = createSlice({
    name: 'app',
    initialState: {
        channelId: null,
        channel_name: null
    },
    reducers: {
        setChannelInfo : (state, action) => {
            state.channel_id = action.payload.channel_id
            state.channel_name = action.payload.channel_name
        },
    }
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = state => state.app.channel_id;
export const selectChannelName = state => state.app.channel_name;

export default appSlice.reducer;
