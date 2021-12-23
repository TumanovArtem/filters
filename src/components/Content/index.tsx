import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { useAppSelector } from '../../hooks/reduxHooks';
import { selectEntityFilteredData } from '../../store/slices/entitySlice';
import { EntityDataType } from '../../types/entityTypes';

export const Content = () => {
    const filteredData = useAppSelector(selectEntityFilteredData);
    const [currentEntity, setCurrentEntity] = useState<EntityDataType>(null);

    return (
        <div className="content">
            {filteredData.length ? (
                <ul className="content-list">
                    {filteredData.map((item) => (
                        <li key={uuid()} onClick={() => setCurrentEntity(item)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <span>No data. Try to change filters</span>
            )}
            <ul className="details">
                {currentEntity &&
                    (
                        Object.keys(currentEntity) as Array<
                            keyof EntityDataType
                        >
                    ).map((key) => (
                        <li key={uuid()}>{`${key}: ${currentEntity[key]}`}</li>
                    ))}
            </ul>
        </div>
    );
};
