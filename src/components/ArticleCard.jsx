export const ArticleCard = (imgUrl, title, description) => {

    return (
        <div className='card p-5 rounded-lg border border-blue-600'>
          <div className="container flex flex-col justify-start">
            <img src={imgUrl}/>
             <h1>{title}</h1>
             <p>{description}</p>
          </div>
        </div>
    )
}