import CelebTable from "@/app/celeb-table";


export default function ContentRoot({teamInfo}) {
    return (
        <div>
            <CelebTable teamInfo={teamInfo}/>
        </div>
    )
}