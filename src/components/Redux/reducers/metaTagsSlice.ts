"use client"

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MetaTagsState {
    title: string;
    description: string;
    imageUrl: string;
    thumbnailUrl: string;
    url: string;
    urlOriginal: string;
}

const initialState: MetaTagsState = {
    title: '',
    description: '',
    imageUrl: '',
    thumbnailUrl: '',
    url: '',
    urlOriginal: '',

};

const metaTagsSlice = createSlice({
    name: 'metaTags',
    initialState,
    reducers: {
        setMetaTags: (state, action: PayloadAction<MetaTagsState>) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.imageUrl = action.payload.imageUrl;
            state.thumbnailUrl = action.payload.thumbnailUrl;
            state.url = action.payload.url;
            state.urlOriginal = action.payload.urlOriginal;
        },
    },
});

export const { setMetaTags } = metaTagsSlice.actions;
export default metaTagsSlice.reducer;
