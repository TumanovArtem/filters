import { EntityTypeEnum } from 'constants/entityConstants';
import { IMG_BASE_URL } from 'constants/urls';
import { ResponseType } from 'types/common';
import { EntityDataType } from 'types/entityTypes';

const createImgUrl = (type: EntityTypeEnum, id: string) => {
    switch (type) {
        case EntityTypeEnum.PERSON:
            return `${IMG_BASE_URL}/characters/${id}.jpg`;
        case EntityTypeEnum.STARSHIP:
            return `${IMG_BASE_URL}/starships/${id}.jpg`;
        case EntityTypeEnum.PLANET:
            return `${IMG_BASE_URL}/planets/${id}.jpg`;
        default:
            return '';
    }
};

export const normalizeEntityData = (type: EntityTypeEnum) => (res: ResponseType<EntityDataType>) =>
    res.data.results.map((entity) => {
        const entityId = entity.url.split('/')[5];
        return { ...entity, type, imgUrl: createImgUrl(type, entityId) };
    });
