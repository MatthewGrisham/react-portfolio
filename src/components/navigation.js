// CLICKABLE Navigation Titles to take you to Sections
// About Me (DEFAULT SHOWN)
// Portfolio
// Contact Me
// Resume
// Navigation Title must highlight when you're on the page.

import React from "react";

function navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <div className="tabs is-centered">
            <ul className="nav nav-tabs">
                {tabs.map((tab) => (
                    <li
                     className={
                        props.currentPage === tab ? "nav-item is-active" : "nav-item"
                     }
                     key={tab}
                    >
                     <a
                        href={"#" + tab.toLowerCase()}
                        // whenever a tab is clicked on,
                        // the current page is set through teh handlePageChange props.
                        onClick={() => props.handlePageChange(tab)}
                        className={
                            props.currentPage === tab ? "nav-link active" : "nav-link"
                        }
                     >
                        {tab}
                     </a>   
                     </li>
                ))}
            </ul>
        </div>
    );
}

export default navigation;