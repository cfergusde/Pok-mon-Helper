import './Table.scss';

export default function GymLeader({ name, index }) {
    
    return (
        <div className={`r${index}`} style={{
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
