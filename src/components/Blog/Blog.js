import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8 mx-5 md:mx-12'>
            <div className='bg-green-200 p-5 rounded-lg my-5'>
                <h3 className='text-2xl'>What is the purpose of Ract Router?</h3>
                <p>React Router enables 'client side routing'.In general websites,browser request documents from server many times as the clients request for it.After that it updates the UI according to the changes.But React router allows the app to update the URL from a link click without making another request. <br />
                    It enables a faster user experience. Thats why it becomes so much popular wroldwide.</p>
            </div>
            <div className='bg-green-200 p-5 rounded-lg my-5'>
                <h3 className='text-2xl'>How does Context API works?</h3>
                <p></p>
            </div>
            <div className='bg-green-200 p-5 rounded-lg my-5'>
                <h3 className='text-2xl'>What is the useRef hook?</h3>
                <p></p>
            </div>
        </div>
    );
};

export default Blog;