import {PostType} from "../../../redux/state";

type PostsPropsType = {
    posts: PostType[]
}

export const Posts = (props: PostsPropsType) => {
    return (
        <div>
            {props.posts.map(el => {
                return (
                    <div key={el.id}>{el.post}</div>
                )
            })}
        </div>
    )
}