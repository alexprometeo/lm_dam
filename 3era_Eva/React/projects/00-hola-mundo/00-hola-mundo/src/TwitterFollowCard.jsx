import './TwitterFollowCard.css'

export function TwitterFollowCard() {
    return (
        <article>
            <img alt="User Avatar" src="https://unavatar.io/user"/>
            <section>
                <h1>User</h1>
                <em>@username</em>
            </section>
            <button>Seguir</button>
        </article>
    )
}