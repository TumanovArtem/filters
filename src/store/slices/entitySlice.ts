import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { EntityTypeEnum } from 'constants/entityConstants';
import { EntityDataType, EntityFilterType, Person, Planet, Starship } from 'types/entityTypes';
import { BASE_URL } from 'constants/urls';
import { RootState } from 'store/index';

type EntityState = {
    data: EntityDataType[];
    filteredData: EntityDataType[];
};

const initialState: EntityState = {
    data: [],
    filteredData: [],
};

type ResponseType = AxiosResponse<{
    results: Omit<Person | Planet | Starship, 'type'>[];
}>;

const addType = (type: EntityTypeEnum) => (res: ResponseType) =>
    res.data.results.map((entity) => ({ ...entity, type }));

export const fetchEntityData = createAsyncThunk('entity/fetch', async () => {
    const response = await Promise.all([
        axios.get(`${BASE_URL}/people`).then(addType(EntityTypeEnum.PERSON)),
        axios.get(`${BASE_URL}/planets`).then(addType(EntityTypeEnum.PLANET)),
        axios.get(`${BASE_URL}/starships`).then(addType(EntityTypeEnum.STARSHIP)),
    ]);
    return response.reduce((acc, data) => acc.concat(data), []);
});

export const entitySlice = createSlice({
    name: 'entity',
    initialState,
    reducers: {
        filterEntity: (state, { payload: entityFilter }: PayloadAction<EntityFilterType>) => {
            state.filteredData = state.data
                .filter((entity) => entity.name.includes(entityFilter.name))
                .filter((entity) =>
                    entityFilter.type.length ? entityFilter.type.includes(entity.type) : true
                );

            if (entityFilter.type.length === 1 && entityFilter.type[0] === EntityTypeEnum.PERSON) {
                if (entityFilter.personFilter?.hair_color) {
                    state.filteredData = (state.filteredData as Person[]).filter(
                        (person) => person.hair_color === entityFilter.personFilter.hair_color
                    );
                }
                if (entityFilter.personFilter?.eye_color) {
                    state.filteredData = (state.filteredData as Person[]).filter(
                        (person) => person.eye_color === entityFilter.personFilter.eye_color
                    );
                }
            }
        },
    },
    extraReducers: {
        [`${fetchEntityData.fulfilled}`]: (state, action) => {
            state.data = state.filteredData = action.payload;
        },
    },
});

export const selectEntityFilteredData = (state: RootState) => state.entity.filteredData;

export const { filterEntity } = entitySlice.actions;

export const entityReducer = entitySlice.reducer;
