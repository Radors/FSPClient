export default function Soundtrack({ title, image }: {title: string, image: string}) {

    return (
        <div className="soundtrack">
            <img className="soundtrack-image" src={`/src/assets/images/${image}`} />
            <div>{title}</div>
        </div>
    )
}