import React, { useState, useEffect } from 'react';
import { PageHeader, Card } from 'antd';
import api from '../mock_api';

// var content = `

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec posuere tellus, a tempus lacus. Maecenas sed urna placerat, molestie dui at, laoreet enim. Pellentesque ac turpis ipsum. Proin pretium a diam sit amet pellentesque. Aliquam aliquet porta dapibus. Donec id gravida orci. In in tellus sit amet velit tincidunt egestas a sit amet leo.

// Nullam vel convallis quam. Cras lectus nisi, posuere in velit sed, convallis aliquet leo. Vestibulum vitae arcu quis augue sollicitudin pellentesque id vitae libero. Vestibulum erat libero, cursus non risus at, placerat suscipit nulla. Mauris in ligula at lectus interdum feugiat. In vehicula sapien at eleifend condimentum. Proin bibendum enim euismod posuere varius. Mauris mi velit, accumsan sit amet nulla eu, congue pretium risus. Donec dolor nulla, molestie nec orci in, rhoncus auctor urna. Nam molestie mattis sem. Donec sed leo aliquam, ultrices est at, eleifend lorem. Nam vitae tincidunt orci, nec lobortis nisl. Phasellus fermentum vel nisl id tincidunt.

// Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vivamus ac vehicula dui. Aenean interdum hendrerit sapien a egestas. Pellentesque sagittis vestibulum risus in ornare. Cras ac massa vehicula, feugiat dui vel, blandit enim. Ut efficitur tempus est, id pretium orci consequat ac. Vivamus elementum sem et massa efficitur, nec rhoncus lectus maximus. Nulla facilisi. In aliquet sem in enim euismod, vel faucibus est volutpat. Etiam auctor metus efficitur nunc sodales, in viverra elit lobortis. Mauris metus nisl, viverra sit amet iaculis sed, laoreet vel ipsum. Cras cursus ipsum in lectus ultrices, a placerat lacus tincidunt. Sed pharetra nisl at velit varius sagittis.

// In bibendum euismod augue quis consectetur. Donec ut vulputate lacus. Mauris et tincidunt eros. Aliquam tempor, tellus eget laoreet cursus, urna quam venenatis nunc, sed pretium lacus mi nec metus. Aliquam blandit diam libero, imperdiet eleifend augue eleifend eget. Vestibulum feugiat accumsan tellus ac pulvinar. Etiam in eros eu massa elementum dignissim. Praesent a massa dolor. Integer sed euismod nulla. Cras eget nisl scelerisque, vehicula libero quis, ornare mi. Duis rutrum purus nec leo aliquam condimentum. Fusce vitae enim libero. Nullam quis ligula tincidunt, viverra dolor nec, malesuada erat. Duis sapien mi, sodales in diam sit amet, elementum scelerisque neque. Vivamus nisi dui, molestie nec accumsan sit amet, varius egestas purus. Quisque et felis mi.

// Ut vel suscipit sapien, ut ullamcorper nisi. Mauris laoreet faucibus dictum. Donec sit amet sapien eget nisi pharetra fermentum. In facilisis laoreet lorem, eu dapibus dui venenatis a. Duis ac massa id nibh ultrices laoreet semper nec urna. Ut et eleifend sapien. Donec a lectus sem. Suspendisse ultricies, leo id interdum pharetra, nibh dolor ullamcorper nunc, id euismod enim tortor ac risus. 
//                         `

const Post = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        let post = api[props.id]
        setTitle(post.title)
        setContent(post.content)
    }, [])

    return (
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title={title}
                />
            </div>

            <div className="post_content_container">
                <Card style={{ marginTop: '20px' }}>
                    {content.split('\n').map((paragraph, idx) => {
                        return <p key={idx}>{paragraph}</p>;
                    })

                    }
                </Card>

            </div>
        </div>
    )

}

export default Post;