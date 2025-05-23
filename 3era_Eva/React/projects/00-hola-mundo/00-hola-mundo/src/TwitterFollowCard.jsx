import './TwitterFollowCard.css'

export function TwitterFollowCard({name = "Unknown", userName = "unknown"}) {
    const avatarSource = `https://unavatar.io/${userName}`;
    const avatarAlt = `${name} Avatar`;

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt={avatarAlt} src={avatarSource}/>
                <section className='tw-followCard-info'>
                    <h1>{name}</h1>
                    <em className='tw-followCard-infoUserName'>@{userName}</em>
                </section>
            </header>
            <button className='tw-followCard-button'>Seguir</button>
        </article>
    )
}