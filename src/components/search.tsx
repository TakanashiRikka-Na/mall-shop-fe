import { Input, Space } from 'antd';
import React from 'react';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const SearchBar: React.FC = () => (
    <Space direction="vertical">
        <Search
            placeholder="input search text"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={onSearch}
        />
    </Space>
);

export default SearchBar;
