import React from 'react';
import { Card } from 'antd';

const Post = (props) => {
    return (
        <div className="article_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Article Title"
                extra={<a href="#">More</a>}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed feugiat nulla. Integer dictum porttitor elit, et lacinia nisi accumsan ac. In ultrices mi iaculis, ultricies quam sed, semper ex. Maecenas nec libero vel turpis aliquet lobortis. Maecenas placerat sem nec elit viverra luctus. Suspendisse augue velit, ullamcorper sit amet laoreet pellentesque, feugiat rhoncus dolor. Donec odio urna, fringilla non ipsum vel, pretium suscipit tortor. Donec at pellentesque ligula, et faucibus diam. Sed faucibus at libero non lacinia. Donec libero leo, rhoncus sed tellus eu, venenatis mollis purus. Quisque vel ante vitae nisi accumsan dapibus nec eget justo. Mauris congue sapien eu convallis mollis. Sed porttitor quis libero ut ullamcorper. Aliquam fermentum at nisl hendrerit ultrices.
                        </p>

                <p>
                    Maecenas luctus lorem arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel risus sit amet lacus semper tincidunt. Nunc ac urna quis lectus condimentum dignissim vel sed ligula. Maecenas euismod eu lacus sed congue. Nullam nec lectus felis. Maecenas ornare euismod libero eleifend bibendum. Pellentesque ornare dignissim ullamcorper. Proin ornare, dolor eget finibus vulputate, diam tortor ultricies purus, vel hendrerit ante metus ac erat. Etiam tempus mi non mi aliquam, lobortis suscipit lacus ultrices.
                        </p>
            </Card>

        </div>
    )

}

export default Post;