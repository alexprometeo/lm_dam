import './TwitterFollowCard.css'

export function TwitterFollowCard() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="User Avatar" src="https://unavatar.io/user"/>
                <section className='tw-followCard-info'>
                    <h1>User</h1>
                    <em className='tw-followCard-infoUserName'>@username</em>
                </section>
            </header>
            <button className='tw-followCard-button'>Seguir</button>
        </article>
    )
}