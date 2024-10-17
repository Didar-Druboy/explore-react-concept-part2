export default function Post(postData) {
    // console.log(postData)
    // const newPostData = postData.postData
    // console.log(newPostData)
    // const {title, body} = newPostData
    const {title, body} = postData.postData
    return (
        <div className="box">
            <h3>Title: {title}</h3>
            <p>{body} </p>
        </div>
    )
}