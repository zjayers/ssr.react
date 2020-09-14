import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>Home Works Yes!</div>
            <button onClick={() => console.log('Hi')}>Press Me!</button>
        </div>
    );
};

export default { component: HomePage };
