export default function Singers(singrs) {
    console.log(singrs);
    return (
        <div>
            <h3>Singer: {singrs.name}</h3>
            <p>age: {singrs.age}</p>
        </div>
    )
}