export default function Avatar({size}) {
    let width = 'w-12';
    if(size==='lg') {
        width = 'w-24 md:w-36';
    }
    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
        </div>
    );
}