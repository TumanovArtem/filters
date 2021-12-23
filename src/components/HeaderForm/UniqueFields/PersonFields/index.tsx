import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Col, Form, Row, Select } from 'antd';

import {
    PersonEyeColorEnum,
    PersonGenderEnum,
    PersonHairColorEnum,
} from '../../../../constants/personConstants';
import { PersonFilterType } from '../../../../types/entityTypes';

const { Option } = Select;

type PersonFieldsPropsType = {
    handleChange: (personFilter: PersonFilterType) => void;
};

export const PersonFields = ({ handleChange }: PersonFieldsPropsType) => {
    const [personFilter, setPersonFilter] = useState<PersonFilterType>({});

    const handlePersonHairChange = (hair_color: PersonHairColorEnum) =>
        setPersonFilter((prev) => ({ ...prev, hair_color }));

    const handleEyeColorChange = (eye_color: PersonEyeColorEnum) =>
        setPersonFilter((prev) => ({ ...prev, eye_color }));

    useEffect(() => {
        handleChange(personFilter);
    }, [personFilter]);

    return (
        <Row gutter={24}>
            <Col span={8}>
                <Form.Item label="Hair color">
                    <Select onChange={handlePersonHairChange}>
                        {(
                            Object.keys(PersonHairColorEnum) as Array<
                                keyof typeof PersonHairColorEnum
                            >
                        ).map((key) => (
                            <Option
                                key={uuid()}
                                value={PersonHairColorEnum[key]}
                            >
                                {PersonHairColorEnum[key]}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item label="Eye color">
                    <Select onChange={handleEyeColorChange}>
                        {(
                            Object.keys(PersonEyeColorEnum) as Array<
                                keyof typeof PersonEyeColorEnum
                            >
                        ).map((key) => (
                            <Option
                                key={uuid()}
                                value={PersonEyeColorEnum[key]}
                            >
                                {PersonEyeColorEnum[key]}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item label="Gender">
                    <Select>
                        {(
                            Object.keys(PersonGenderEnum) as Array<
                                keyof typeof PersonGenderEnum
                            >
                        ).map((key) => (
                            <Option key={uuid()} value={PersonGenderEnum[key]}>
                                {PersonGenderEnum[key]}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
        </Row>
    );
};
