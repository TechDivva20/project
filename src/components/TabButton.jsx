export default function ({children , onSelect}){
    function handleSelect () {
        console.log("Tap! Tap!! Tap!!!")
    }
    return (
    <li>
    <button onClick = {onSelect}>{children}</button>
    </li>
    )
}