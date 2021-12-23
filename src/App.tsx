import React, { useEffect } from 'react';

import { useAppDispatch } from 'hooks/reduxHooks';
import { fetchEntityData } from 'store/slices/entitySlice';
import { Content } from 'components/Content';
import { HeaderForm } from 'components/HeaderForm';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchEntityData());
    }, []);

    return (
        <div className="container">
            <HeaderForm />
            <Content />
        </div>
    );
};
