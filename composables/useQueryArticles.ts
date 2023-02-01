import { reactive } from 'vue'

export type Article = {
  _path: string,
  publishedAt: number,
  title: string,
  topic: string,
  description: string,
  author: string,
  thumbnailUrl?: string,
}

export default function useQueryArticles() {
  const pageLimit = 10
  const query = reactive({
    offset: 0,
    limit: pageLimit,
  })
  const goPage = (pageNum: number) => {
    query.offset = (pageNum - 1) * query.limit
  }

  let queryParams = reactive({})
  const setQueryParams = (params: Record<string, string>) => {
    queryParams = params
    initPagination()
  }

  let count = ref(0)
  const initPagination = async () => {
    const posts = await queryContent('blog')
      .where(queryParams)
      .find()
    count.value = posts.length
  }
  initPagination()

  const getArticles = async () => {
    return await queryContent<Article>('blog')
      .where(queryParams)
      .sort({ publishedAt: -1 })
      .skip(query.offset)
      .limit(query.limit)
      .find()
  }

  const getTopicsInfo = async () => {
    const topicsFile = await queryContent('/')
      .where({_file: 'topics.yaml'})
      .findOne()

    return topicsFile.topics
  }

  const getRelatedArticlesByArticle = async (article: Article) => {
    if (!article) {
      return []
    }

    const articlesLeft = await queryContent<Article>('blog')
      .where({ topic: article.topic, publishedAt: { $lt: article.publishedAt } })
      .sort({ publishedAt: -1 })
      .limit(2)
      .find()

    const articlesRight = await queryContent<Article>('blog')
      .where({ topic: article.topic, publishedAt: { $gt: article.publishedAt } })
      .sort({ publishedAt: -1 })
      .limit(2)
      .find()

    return [...articlesLeft, ...articlesRight].slice(0, 2)
  }

  return {
    query,
    goPage,
    getArticles,
    count,
    setQueryParams,
    getTopicsInfo,
    getRelatedArticlesByArticle,
  }
}
