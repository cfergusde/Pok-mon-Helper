import './Table.scss';

/*
    GymLeader component renders a gymleader box, referencing their badge # and profile picture
*/
export default function GymLeader({ name, index }) {
    // TODO: Add prop for profile picture
    
    return (
        <div className={`table-item r${index}`} style={{
            display: 'flex',
            gap: '10px',
            border: '2px solid white',
            padding: '10px'
        }}>
            <div>{index+1}</div>
            <div>{name}</div>
        </div>
    )
}
