import { GymLeaders } from "components/GymLeaders"


export default function Start () {
    const leaders = ['Roark', 'Gardenia', 'Fantina', 'Maylene', 'Crasher Wake', 'Byron', 'Candice', 'Volkner']

    return (
        <main className="flex justify-center items-center">
        <p>Gym Leaders:</p>
        <GymLeaders leaders={leaders} />
        </main>
    )
}
