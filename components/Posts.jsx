import React from 'react';
import { PageHeader } from 'antd';

const Posts = (props) => {
    return (
        <div className="posts_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Posts"
                />
            </div>
            <div className="articles_container">
            <div className="aricle">

            </div>
            </div>
        </div>
    )
}

export default Posts;