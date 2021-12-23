import React, { useEffect } from 'react';

import { useAppDispatch } from 'hooks/reduxHooks';
import { fetchEntityData } from 'store/slices/entitySlice';
import { HeaderForm } from 'components/HeaderForm';
import { Content } from 'components/Content';

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
