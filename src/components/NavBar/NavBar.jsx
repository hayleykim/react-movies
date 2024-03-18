import { Link } from "react-router-dom";

export default function NavBar({user}) {
    return (
        <nav>
            <p>Hi, {user}</p>
            <Link to="/movies">Movie List</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">Actor List</Link>
        </nav>
    );
};