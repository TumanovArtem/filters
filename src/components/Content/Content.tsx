import { useContext, useState } from 'react';
import { useAppSelector } from 'hooks/reduxHooks';

import { selectEntityData } from 'store/slices/entitySlice';
import { EntityDataType } from 'types/entityTypes';
import { useEntityFilter } from 'hooks/useEntityFilter';
import { EntityFilterContext } from 'hoc/EntityFilterContextProvider';

export const Content = () => {
    const [currentEntity, setCurrentEntity] = useState<EntityDataType>(null);

    const filter = useContext(EntityFilterContext);

    const data = useAppSelector(selectEntityData);
    const filteredData = useEntityFilter({ data, filter });

    return (
        <div className="content">
            {filteredData.length ? (
                <ul className="content-list">
                    {filteredData.map((item) => (
                        <li key={item.name} onClick={() => setCurrentEntity(item)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <span>No data. Try to change filters</span>
            )}

            <div className="details">
                {currentEntity && (
                    <>
                        <div className="img-wrapper">
                            <img src={currentEntity.imgUrl} alt={currentEntity.name} />
                        </div>
                        <ul>
                            {(Object.keys(currentEntity) as Array<keyof EntityDataType>).map(
                                (key) => (
                                    <li key={key}>{`${key}: ${currentEntity[key]}`}</li>
                                )
                            )}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};
