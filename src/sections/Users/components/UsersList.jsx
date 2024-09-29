import UserListItem from "./UsersListItem"

export default function UserList(props) {
    const { userList } = props
    return (
        <ul className="users-list">
            {userList.map((userItem) => (
                <UserListItem userItem={userItem} key={userItem.id} />
            ))}
        </ul>
    )
}