import './App.css'
export default function Singers({singer}){
    return(
        <div className='singer'>
            <h3>name: {singer.name}</h3>
            <h4>age: {singer.age}</h4>
        </div>
    )
}