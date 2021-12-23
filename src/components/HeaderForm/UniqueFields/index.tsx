import { EntityTypeEnum } from 'constants/entityConstants';
import { PersonFields } from './PersonFields';
import React from 'react';
import { PersonFilterType } from 'types/entityTypes';

export type UniqueFieldsPropsType = {
    type: EntityTypeEnum;
    handlePersonFilterChange: (personFilter: PersonFilterType) => void;
};
export const UniqueFields = ({ type, handlePersonFilterChange }: UniqueFieldsPropsType) => {
    switch (type) {
        case EntityTypeEnum.PERSON:
            return <PersonFields handleChange={handlePersonFilterChange} />;
        // case (EntityTypeEnum.PLANET):
        //     return 2;
        // case (EntityTypeEnum.STARSHIP):
        //     return 3;
        default:
            return null;
    }
};
