import React from 'react';
import { PageHeader } from 'antd';
import Post from "./Post";
import api from "../mock_api";
import _ from 'lodash';

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
                <Post />
                <Post />
                <Post />
                <Post />

            </div>
        </div>
    )
}

export default Posts;