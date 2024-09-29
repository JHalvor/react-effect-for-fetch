export default function UserListItem({ userItem: {firstName, lastName, email, profileImage, favouriteColour} }) {
    console.log(firstName)
    return (
        <li style={{ backgroundColor: favouriteColour }}>
            <img
                src={profileImage}
                alt={`${firstName} ${lastName}`}
            />
            <h3>{`${firstName} ${lastName}`}</h3>
            <p>{`Email: ${email}`}</p>
        </li>
    )
}