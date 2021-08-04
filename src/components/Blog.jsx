import styled from "styled-components";
import ArticlesList from "./ArticlesList.jsx";
import FlowFooter from "./FlowFooter.jsx";
import useFetch from "../hooks/useFetch.js"

const BlogContainer = styled.div``
const ErrorMsg = styled.h2`
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
font-size: 1.7rem;
font-weight: 700;
color: #00C6AF;
`
const LoadingMsg = styled(ErrorMsg)``

const Blog = () => {
  const { articles, isLoading, error } = useFetch('http://localhost:1309/articles');

  return (
    <BlogContainer >
      {error && <ErrorMsg>Upss...Try again to fetch the data</ErrorMsg>}
      {isLoading && <LoadingMsg>Loading the data...</LoadingMsg>}
      {articles && <ArticlesList articles={articles} sectionTitle='All articles'></ArticlesList>}
      {articles && <ArticlesList articles={articles.filter(article => article.topic === 'Vue')} sectionTitle='Vue articles'></ArticlesList>}
      {articles && <ArticlesList articles={articles.filter(article => article.topic === 'React')} sectionTitle='React articles'></ArticlesList>}
      {articles && <ArticlesList articles={articles.filter(article => article.topic === 'Java Script')} sectionTitle='Java Script articles'></ArticlesList>}
      <FlowFooter />
    </BlogContainer>
  );
}
export default Blog;