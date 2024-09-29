export default function ArtListItem({ artItem: {id, title, artist, imageURL, publicationHistory} }) {
    return (
        <li>
            <div className="frame">
                <img
                src={"https://boolean-uk-api-server.fly.dev/" + imageURL}
                />
            </div>
            <h3>{title}</h3>
            <p>Artist: {artist}</p>
            <h4>Publication History:</h4>
            <ul>
                {publicationHistory.map((publication, index) => (
                        <li key={index}>{publication}</li>
                    ))}
            </ul>
        </li>
    )
}