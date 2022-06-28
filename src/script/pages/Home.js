import { Button, DatePicker, Tooltip, Dropdown, Space, Pagination } from 'antd'
import { PoweroffOutlined, SearchOutlined, RightOutlined, LeftOutlined, DownOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { useState } from 'react'

import { menu } from './Menu'

function Home() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000)
    }

    return (
        <div style={{ margin: 32 }}>
            <Button danger icon={<PoweroffOutlined />} loading={loading} onClick={handleClick} >Button</Button>
            <DatePicker />
            <br />

            <Tooltip title="search">
                <Button icon={<SearchOutlined />} style={{ marginTop: 40 }}>Search</Button>
            </Tooltip>
            <br />
            <div style={{ marginTop: 40 }}>
                <Tooltip title="Pre">
                    <Button icon={<LeftOutlined />} style={{ marginRight: 20, marginTop: 20 }} >Pre</Button>
                </Tooltip>
                <Tooltip title="Next">
                    <Button type="primary" icon={<RightOutlined />}>Next</Button>
                </Tooltip>
            </div>
            <br />
            <Pagination defaultCurrent={2} total={50} ></Pagination>
            <br />
            <Dropdown overlay={menu} >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Actions
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            <h1>Homepage</h1>
        </div >
    )
}

export default Home