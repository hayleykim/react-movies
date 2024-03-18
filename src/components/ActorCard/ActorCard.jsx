export default function ActorCard({ actors }) {
    return (
        <div>
            {actors.map((actor, index) => 
                
                <div key={index}>
                    <img src="https://picsum.photos/100/100" alt="image of actor"/>
                    <div>{actor}</div>
                    <hr />
                </div>
                )}
        </div>
    );
};