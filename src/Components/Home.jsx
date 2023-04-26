import React, { useContext } from 'react';
import { UserContext } from '../providers/UserContext';

const Home = () => {
    const user = useContext(UserContext);
    return (
        <div>
            Home {user && user.displayName}
        </div>
    );
};

export default Home;