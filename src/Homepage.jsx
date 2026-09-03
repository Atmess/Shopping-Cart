import stream from "./assets/picture/800px-LiveTwins.png"


export default function Home(){
    return(<div className="flex column">
        <img src={stream} alt="stream" width={800} height={450} />
        </div>
    )
}