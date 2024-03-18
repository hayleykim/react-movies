import ActorCard from "../../components/ActorCard/ActorCard";

export default function ActorListPage({ movies }) {

    //empty object for unique actors
    let actorList = {};

    for (const movie of movies) { //movie in the movies array
        for (const cast of movie.cast) { //each cast in the cast list of this movie
            actorList[cast] = 0; //cast as a key to actorList obj with a value of 0 - obj cannot have same keys, so this way I make sure I add each of them once only.
        }
    }
    
    const actors = Object.keys(actorList);

    return (
        <>
            <h1>ActorListPage</h1>
            <ActorCard actors={actors}/>
            
        </>
    );
};