import { useEffect } from 'react';

import { useAppDispatch } from 'hooks/reduxHooks';
import { fetchEntityData } from 'store/slices/entitySlice';
import { Content } from 'components/Content';
import { HeaderForm } from 'components/HeaderForm';
import { EntityFilterContextProvider } from 'hoc/EntityFilterContextProvider';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchEntityData());
    }, []);

    return (
        <div className="container">
            <EntityFilterContextProvider>
                <HeaderForm />
                <Content />
            </EntityFilterContextProvider>
        </div>
    );
};
