import { List, Avatar } from 'antd'

const ListUsers = ({users}) => {
    return(<List
        itemLayout="horizontal"
        className="user-list"
        dataSource={users}
        renderItem={item => (
        <List.Item>
            <List.Item.Meta
            avatar={<Avatar src={item?.avatar_url} size='large'/>}
            title={<a href={item?.html_url}>{item?.login}</a>}
            description={item?.bio}
            className='meta'
            />
            <br/>
        </List.Item>
        )}
    />)
}

export default ListUsers;