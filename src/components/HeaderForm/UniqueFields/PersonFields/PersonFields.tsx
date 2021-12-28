import { useContext } from 'react';
import { Col, Form, Row, Select } from 'antd';

import {
    PersonEyeColorEnum,
    PersonGenderEnum,
    PersonHairColorEnum,
} from 'constants/personConstants';
import { EntityFilterContext } from 'hoc/EntityFilterContextProvider';

const { Option } = Select;

export const PersonFields = () => {
    const { personFilter, setFilter } = useContext(EntityFilterContext);

    const handlePersonHairChange = (hair_color: PersonHairColorEnum) =>
        setFilter((prev) => ({ ...prev, personFilter: { ...prev.personFilter, hair_color } }));

    const handleEyeColorChange = (eye_color: PersonEyeColorEnum) =>
        setFilter((prev) => ({ ...prev, personFilter: { ...prev.personFilter, eye_color } }));

    const handleGenderChange = (gender: PersonGenderEnum) => {
        setFilter((prev) => ({ ...prev, personFilter: { ...prev.personFilter, gender } }));
    };

    return (
        <Row gutter={24}>
            <Col span={8}>
                <Form.Item label="Hair color">
                    <Select
                        onChange={handlePersonHairChange}
                        defaultValue={personFilter.hair_color}
                    >
                        {Object.values(PersonHairColorEnum).map((hairColor) => (
                            <Option key={hairColor} value={hairColor}>
                                {hairColor}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item label="Eye color">
                    <Select onChange={handleEyeColorChange} defaultValue={personFilter.eye_color}>
                        {Object.values(PersonEyeColorEnum).map((eyeColor) => (
                            <Option key={eyeColor} value={eyeColor}>
                                {eyeColor}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item label="Gender">
                    <Select onChange={handleGenderChange} defaultValue={personFilter.gender}>
                        {Object.values(PersonGenderEnum).map((gender) => (
                            <Option key={gender} value={gender}>
                                {gender}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
        </Row>
    );
};
