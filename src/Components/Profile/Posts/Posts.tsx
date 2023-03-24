import {PostType} from "../../../redux/store";

type PostsPropsType = {
    posts: PostType[]
}

export const Posts = (props: PostsPropsType) => {
    debugger
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