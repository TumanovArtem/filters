import { EntityDataType } from 'types/entityTypes';
import { EntityFilterContextType } from 'hoc/EntityFilterContextProvider';
import { EntityTypeEnum } from 'constants/entityConstants';
import { objIsPerson } from 'helpers/guards';

type useEntityFilterPropsType = {
    data: EntityDataType[];
    filter: EntityFilterContextType;
};

export const useEntityFilter = ({ data, filter }: useEntityFilterPropsType) => {
    let filteredData = data
        .filter((entity) => entity.name.toLowerCase().includes(filter.name.toLowerCase()))
        .filter((entity) => (filter.type.length ? filter.type.includes(entity.type) : true));

    if (filter.type.length === 1 && filter.type[0] === EntityTypeEnum.PERSON) {
        if (filter.personFilter?.hair_color) {
            filteredData = filteredData.filter(
                (person) =>
                    objIsPerson(person) && person.hair_color === filter.personFilter.hair_color
            );
        }

        if (filter.personFilter?.eye_color) {
            filteredData = filteredData.filter(
                (person) =>
                    objIsPerson(person) && person.eye_color === filter.personFilter.eye_color
            );
        }

        if (filter.personFilter?.gender) {
            filteredData = filteredData.filter(
                (person) => objIsPerson(person) && person.gender === filter.personFilter.gender
            );
        }
    }

    return filteredData;
};
