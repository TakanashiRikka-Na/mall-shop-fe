import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';


const HeadImg: React.FC = () => {

    return(
    <div>
<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />

</div>);
}

export default HeadImg;
