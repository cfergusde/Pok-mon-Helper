export type GymLeader = {
    name: string,
    imgUrl?: string // shows optional value
}

type GymLeadersProps = {
    leaders: string[] // todo: change this to GymLeader[]
}

//                            params    paramsType
export const GymLeaders = ({ leaders }: GymLeadersProps) => {

    // HTML(TSX) to be returned
    return (
        <div className="">

        </div>
    )
}