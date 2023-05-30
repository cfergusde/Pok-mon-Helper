

export default function Start() {
    const leaders = ['Roark', 'Gardenia', 'Fantina', 'Maylene', 'Crasher Wake', 'Byron', 'Candice', 'Volkner']

    return (
        <main>
        <p>Gym Leaders:</p>
        {
          leaders.map((leader, index)=>
            <p key={index}>{leader}</p>
          )
        }
        </main>
    )
}
