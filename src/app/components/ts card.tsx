//what is component
//component kay name ka first letter capital hota hai
//component ak function hai
//component HTML ka parent element return kerta hai
//component reuseable hai
//component m js /ts kay andar html &css bhi likh sakta hai
//component m html kay andar js/ts bhi likh sakta hai

export default function home(){
    return(
        <div className= "homeContainer">
        <div className="childContainer">
            HELLO,
            <br />
            my Name is <span className="Darkblue">Ayesha</span>
            <br/> I am Next JS Developer
        </div>
        <div className= "childContainer"></div>
        </div>

        {/* below code is with tailwind css*/}
        <div className="flex justify-between items-center" > 
        <div className="w-fit h-[250px] m[40px] text-[80px] font-black">
            HELLO,
            <br/>my Name is <span className="Darkblue">Aaqil</span>
            <br/> I am Next JS Developer
            </div>
            <div className= ""></div>
        </div>
    )
}