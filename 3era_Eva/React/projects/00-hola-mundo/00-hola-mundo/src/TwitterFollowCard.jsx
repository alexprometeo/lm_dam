import { useState } from 'react';

import './TwitterFollowCard.css'


// export function TwitterFollowCard({name = "Unknown", userName = "unknown", isFollowing = false, formatUserName}) {
export function TwitterFollowCard({name = "Unknown", userName = "unknown", initialIsFollowing = false}) {
    const avatarSource = `https://unavatar.io/${userName}`;
    const avatarAlt = `${name} Avatar`;

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    console.log(`El usuario ${userName} tiene isFollowing con este valor: ${isFollowing}`);

    const handleClick = () => {        
        setIsFollowing(!isFollowing);
    }

    const isFollowingText = isFollowing ? 'Dejar de seguir' : 'Seguir';
    const isFollowingClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    return (
        <article className='tw-followCard '>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt={avatarAlt} src={avatarSource}/>
                <section className='tw-followCard-info'>
                    <h1>{name}</h1>
                    <em className='tw-followCard-infoUserName'>@{userName}</em>
                    {/* <em className='tw-followCard-infoUserName'>{formatUserName}</em> */}
                </section>
            </header>
            <button className={isFollowingClassName} onClick={handleClick}>{isFollowingText}</button>
        </article>
    )
}