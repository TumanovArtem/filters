import { EntityFilterType } from 'types/entityTypes';
import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

export type EntityFilterContextType = {
    setFilter: Dispatch<SetStateAction<EntityFilterContextType>>;
} & EntityFilterType;

const initial: EntityFilterContextType = {
    name: '',
    type: [],
    personFilter: {},
    setFilter: (): void => {
        throw new Error('setFilter function must be overridden');
    },
};

export const EntityFilterContext = createContext<EntityFilterContextType>(initial);

export const EntityFilterContextProvider: FC = ({ children }) => {
    const [filter, setFilter] = useState(initial);
    return (
        <EntityFilterContext.Provider value={{ ...filter, setFilter }}>
            {children}
        </EntityFilterContext.Provider>
    );
};
