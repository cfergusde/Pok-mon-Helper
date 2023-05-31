import GymLeader from "@/components/GymLeader"
import "../../components/Table.scss";

// This is a "type" in TypeScript. Think of it as kind of like a class with no functions in it.
// Any object you want to make of type GymLeader must have all three properties in it.
type GymLeader = {
    name: string,
    pictureUrl: string,
    badgeNum: number
}

export default function Start() {
    // TODO: Change this list from a list of strings into a list of GymLeader objects.

    const leaders = ['Roark', 'Gardenia', 'Fantina', 'Maylene', 'Crasher Wake', 'Byron', 'Candice', 'Volkner']

    return (
        <main>
            <p>Gym Leaders:</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={"table"} style={{
                    
                }}>
                    {
                    leaders.map((leader, index)=>
                        <GymLeader name={leader} index={index} key={index}/>
                    )
                    }
                </div>
            </div>
            

        </main>
    )
}
