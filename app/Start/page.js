import GymLeader from "@/components/GymLeader"
import "../../components/Table.scss";

export default function Start() {
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
