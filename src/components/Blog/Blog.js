import React from 'react';
import "./Blog.css";
const Blog = () => {
    return (
        <div>
           <div>
           <h1 className='blog-title '> This is Quiz-Mania Blog page ...</h1>
           </div>
            <div className='blog-question'>
                <h4>what is the react router perpouse?</h4>
                <p>React Router is a state container for the current location , or URL. It keeps track of the location and renders different route s as it changes, and it also gives you tools to update the location using Link s and the history API.</p>
            </div>
            <div className='blog-question'>
                <h4>what is the main use of context Api?</h4>
                <p> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on</p>
            </div>
            <div className='blog-question'>q3</div>

        </div>
    );
};

export default Blog;