const BLOG = {
  title: 'Shares',
  author: 'SimonChan',
  email: 'waisimon@outlook.com',
  link: 'https://blog.ideas.cf',
  description: 'This gonna be an awesome website.',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: false,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://twitter.com/craigaryhart',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'cusdis', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'nobelium-react-notion', // The repository of store comments
      owner: 'waisimon',
      admin: ['waisimon'],
      clientID: 'fa49f2cdafda1f820c8a',
      clientSecret: 'b875f630e576ac89f5d361c2a408f35ba4af4dca',
      distractionFreeMode: true
    },
    utterancesConfig: {
      repo: 'waisimon/nobelium-react-notion'
    },
    cusdisConfig: {
      appId: '4cd98cee-3590-43d8-9dbb-1ea4aa5e9b57', // data-app-id
      host: 'https://cusdis.ideas.cf', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.ideas.cf/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
