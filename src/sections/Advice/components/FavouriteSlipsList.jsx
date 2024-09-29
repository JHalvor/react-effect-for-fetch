export default function FavouriteSlipsList(props) {
    const { favouriteSlips } = props

    return (
        <ul className="art-list">
            {favouriteSlips.map((slip, index) => (
                <li key={index}>{slip}</li>
            ))}
        </ul>
    )
}