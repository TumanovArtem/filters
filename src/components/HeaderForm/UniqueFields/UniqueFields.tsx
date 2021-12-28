import { EntityTypeEnum } from 'constants/entityConstants';
import { PersonFilterType } from 'types/entityTypes';

import { PersonFields } from './PersonFields';

export type UniqueFieldsPropsType = {
    type: EntityTypeEnum;
};

export const UniqueFields = ({ type }: UniqueFieldsPropsType) => {
    switch (type) {
        case EntityTypeEnum.PERSON:
            return <PersonFields />;
        // case (EntityTypeEnum.PLANET):
        //     return 2;
        // case (EntityTypeEnum.STARSHIP):
        //     return 3;
        default:
            return null;
    }
};
