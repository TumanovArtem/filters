import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
import { v4 as uuid } from 'uuid';

import { EntityTypeEnum } from 'constants/entityConstants';
import { useAppDispatch } from 'hooks/reduxHooks';
import { filterEntity } from 'store/slices/entitySlice';
import { EntityFilterType, PersonFilterType } from 'types/entityTypes';

import { UniqueFields } from './UniqueFields';

const { Option } = Select;

const entityFilterInitialState: EntityFilterType = {
    name: '',
    type: [],
};

export const HeaderForm = () => {
    const dispatch = useAppDispatch();

    const [entityFilter, setEntityFilter] = useState<EntityFilterType>(entityFilterInitialState);
    const [isUniqueFieldShown, setIsUniqueFieldShown] = useState<boolean>(false);

    const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEntityFilter((prev) => ({ ...prev, name: e.target.value }));

    const handleTypeFilterChange = (type: EntityTypeEnum[]) => {
        setEntityFilter((prev) => ({ ...prev, type }));
    };

    const handlePersonFilterChange = (personFilter: PersonFilterType) => {
        setEntityFilter((prev) => ({ ...prev, personFilter }));
    };

    useEffect(() => {
        dispatch(filterEntity(entityFilter));
    }, [entityFilter]);

    useEffect(() => {
        entityFilter.type.length === 1 ? setIsUniqueFieldShown(true) : setIsUniqueFieldShown(false);
    }, [entityFilter.type]);

    return (
        <Form>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item label="Name">
                        <Input type="text" onChange={handleNameFilterChange} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Type">
                        <Select mode="multiple" allowClear onChange={handleTypeFilterChange}>
                            {(
                                Object.keys(EntityTypeEnum) as Array<keyof typeof EntityTypeEnum>
                            ).map((key) => (
                                <Option key={uuid()} value={EntityTypeEnum[key]}>
                                    {EntityTypeEnum[key]}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            {isUniqueFieldShown && (
                <UniqueFields
                    type={entityFilter.type[0]}
                    handlePersonFilterChange={handlePersonFilterChange}
                />
            )}
        </Form>
    );
};
