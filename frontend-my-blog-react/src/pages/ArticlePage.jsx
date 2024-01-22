import { useParams } from 'react-router-dom'
import ArticleContent from '../ArticleContent'
import NotFoundPage from '../pages/NotFoundPage';

const ArticlePage = () => {
    const {articleId} = useParams();
    const article = ArticleContent.find(article => article.name === articleId)

    if (!article) {
        return <NotFoundPage/>
    }
    return (
        <>
        <title>{article.title}</title>
        <h1>{article.title}</h1>
        {article.content.map((paragraph,i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    )
}

export default ArticlePage