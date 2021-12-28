import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { EntityTypeEnum } from 'constants/entityConstants';
import { EntityDataType } from 'types/entityTypes';
import { BASE_URL } from 'constants/urls';
import { RootState } from 'store/store';
import { normalizeEntityData } from 'helpers/normalizers';

type EntityState = {
    data: EntityDataType[];
};

const initialState: EntityState = {
    data: [],
};

export const fetchEntityData = createAsyncThunk('entity/fetch', async () => {
    const response = await Promise.all([
        axios.get(`${BASE_URL}/people`).then(normalizeEntityData(EntityTypeEnum.PERSON)),
        axios.get(`${BASE_URL}/planets`).then(normalizeEntityData(EntityTypeEnum.PLANET)),
        axios.get(`${BASE_URL}/starships`).then(normalizeEntityData(EntityTypeEnum.STARSHIP)),
    ]);
    return response.reduce((acc, data) => acc.concat(data), []);
});

export const entitySlice = createSlice({
    name: 'entity',
    initialState,
    reducers: {},
    extraReducers: {
        [`${fetchEntityData.fulfilled}`]: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const selectEntityData = (state: RootState) => state.entity.data;

export const entityReducer = entitySlice.reducer;
