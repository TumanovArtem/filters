import { ChangeEvent, useContext } from 'react';
import { Col, Form, Input, Row, Select } from 'antd';

import { EntityTypeEnum } from 'constants/entityConstants';

import { UniqueFields } from './UniqueFields';
import { EntityFilterContext } from 'hoc/EntityFilterContextProvider';

const { Option } = Select;

export const HeaderForm = () => {
    const { name, type, setFilter } = useContext(EntityFilterContext);

    const handleNameFilterChange = (e: ChangeEvent<HTMLInputElement>) =>
        setFilter((prev) => ({ ...prev, name: e.target.value }));

    const handleTypeFilterChange = (type: EntityTypeEnum[]) => {
        setFilter((prev) => ({ ...prev, type }));
    };

    return (
        <Form>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item label="Name">
                        <Input type="text" value={name} onChange={handleNameFilterChange} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Type">
                        <Select mode="multiple" allowClear onChange={handleTypeFilterChange}>
                            {Object.values(EntityTypeEnum).map((type) => (
                                <Option key={type} value={type}>
                                    {type}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            {type.length === 1 && <UniqueFields type={type[0]} />}
        </Form>
    );
};
