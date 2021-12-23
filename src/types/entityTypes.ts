import { EntityTypeEnum } from 'constants/entityConstants';
import {
    PersonEyeColorEnum,
    PersonGenderEnum,
    PersonHairColorEnum,
} from 'constants/personConstants';

export type EntityType = {
    type: EntityTypeEnum;
    name: string;
    url: string;
    created: string;
    edited: string;
};

export type Person = {
    height: string;
    mass: string;
    hair_color: PersonHairColorEnum;
    skin_color: string;
    eye_color: PersonEyeColorEnum;
    birth_year: string;
    gender: PersonGenderEnum;
    homeworld: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
} & EntityType;

export type Planet = {
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: string[];
    films: string[];
    pilots: string[];
} & EntityType;

export type Starship = {
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    films: string[];
    pilots: string[];
} & EntityType;

export type EntityDataType = Person | Planet | Starship;

export type EntityFilterType = {
    name: string;
    type: EntityTypeEnum[];
    personFilter?: PersonFilterType;
};

export type PersonFilterType = {
    hair_color?: PersonHairColorEnum;
    eye_color?: PersonEyeColorEnum;
};
