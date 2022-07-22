import Article from "./Article"

function ArticleList ({post}) {

    const articleElements = post.map(entry => {
        return (<Article key={entry.id} title={entry.title} date={entry.date} preview={entry.preview} />)
    })
    
    return (

   <main>
        {articleElements}
   </main>
    )
}

export default ArticleList