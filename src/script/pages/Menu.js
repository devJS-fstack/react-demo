import { Menu } from 'antd'
import { SmileOutlined } from '@ant-design/icons';

export const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Search Google
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Start App
                    </a>
                ),
                icon: <SmileOutlined />,
                disabled: true,
            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        End App
                    </a>
                ),
                icon: <SmileOutlined />,
                disabled: true,
            },
            {
                key: '4',
                danger: true,
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Dange Action
                    </a>
                ),
            },
        ]}
    />
)