const Card = () => {
    return (
        <>
        <div className="bg-gray-50 m-2 border-1 border-gray-200 rounded-lg p-2 hover:scale-103 ease-in-out duration-150 cursor-pointer"> 
            <p className="border-b-1 border-gray-200 text-black p-2 ">
                This is the question of a flashcard
            </p>
            <p className="p-2"> 
                There should be an answer
                but unfortunately the devs did not connect the backend yet. 
                How bad..
            </p>
        </div>
        </>
    )
}
 
export default Card;