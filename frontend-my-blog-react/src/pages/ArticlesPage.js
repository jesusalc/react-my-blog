import ArticleContent from '../ArticleContent'
import ArticlesList from '../components/ArticlesList'

const ArticlesPage = () => {
    return (
        <>
        <h1>Articles</h1>
        <ArticlesList articles={ArticleContent}>
        </ArticlesList>
        </>
    )
}

export default ArticlesPage