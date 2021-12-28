import { EntityDataType, PersonType, PlanetType, StarshipType } from 'types/entityTypes';
import { EntityTypeEnum } from 'constants/entityConstants';

export const objIsPerson = (obj: EntityDataType): obj is PersonType =>
    obj.type === EntityTypeEnum.PERSON;

export const objIsStarship = (obj: EntityDataType): obj is StarshipType =>
    obj.type === EntityTypeEnum.STARSHIP;

export const objIsPlanet = (obj: EntityDataType): obj is PlanetType =>
    obj.type === EntityTypeEnum.PLANET;
