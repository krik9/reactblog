import React from 'react';
import { Card } from 'antd';

const PostSnippet = (props) => {
    return (
        <div className="post_snippet_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={<a href="#">More</a>}
            >
             <p className="post_snippet_content">
                 {props.content}
             </p>
            </Card>

        </div>
    )

}

export default PostSnippet;