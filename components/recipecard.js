import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const RecipeCard = () => (
    <Card
        style={{
            width: 300,
        }}
        cover={
            <img
                alt='example'
                src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fclass101.net%2Fko%2Fproducts%2F5f9eb55edee0f80013c22381&psig=AOvVaw1apUAamiPhSPpRKZ_LdUak&ust=1683662863336000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDV8IjD5v4CFQAAAAAdAAAAABAP'
            />
        }
        actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
        ]}
    >
        <Meta
            avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />}
            title='Card title'
            description='This is the description'
        />
    </Card>
);

export default RecipeCard;
