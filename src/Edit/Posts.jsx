import './Posts.scss'

export default function Posts({posts}) {
    return(
        <div className='div_post'>
            {
                posts.map(elem => {
                    return <ul key={elem.id}>
                        <span>Title : <li>{elem.title.slice(0, 15)}</li></span>
                        <span>Body : <li>{elem.body.slice(0, 20)}</li></span>
                    </ul>
                })
            }
        </div>
    )
}