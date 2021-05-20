import React from 'react';

const Link = ({ className, href, children }) => {

    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href); //changes just url to given href without reloading page

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        // this will communicate to route that url has changed
    };

    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
}

export default Link;