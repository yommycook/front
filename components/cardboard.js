import { Card, List, Typography } from 'antd';

const { Title } = Typography;

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];
const CardBoard = () => (
    <>
        <Title level={5}>최근에 등록된 레시피</Title>
        <List
            grid={{
                gutter: 16,
                column: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Card title={item.title}>Card content</Card>
                </List.Item>
            )}
        />
    </>
);
export default CardBoard;
