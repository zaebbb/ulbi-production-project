import { type Article } from '../../../src/entities/Article'

const articleData = {
  title: 'Научная статья - Биология',
  subtitle: 'БиологиЯ',
  // eslint-disable-next-line max-len
  image: 'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200',
  views: 1022,
  createdAt: '26.02.2022',
  userId: '1',
  type: [
    'SCIENCE',
  ],
  blocks: [],
}

export const createArticle = (article?: Article) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: {
      authorization: 'test-token',
    },
    body: article ?? articleData,
  }).then(({ body }) => {
    return body
  })
}

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: {
      authorization: 'test-token',
    },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}
