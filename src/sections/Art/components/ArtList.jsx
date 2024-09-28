import ArtListItem from "./ArtListItem"

export default function ArtList(props) {
    const { artList } = props

    return (
        <ul className="art-list">
            {artList.map((artItem) => (
                <ArtListItem artItem={artItem} key={artItem.id} />
            ))}
        </ul>
    )
}