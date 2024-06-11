export default function ({children , onSelect, isSelected}){
    function handleSelect () {
        console.log("Tap! Tap!! Tap!!!")
    }
    return (
    <li>
    <button className= {isSelected ? 'active' : undefined} onClick = {onSelect}>{children}</button>
    </li>
    )
}