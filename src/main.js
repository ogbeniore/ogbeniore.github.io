// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  head.meta.push({
    name: 'keywords',
    content: 'Oreoluwa, Software Engineer, Nigeria, Developer, Oreoluwa Ojo'
  })

  head.meta.push({
    name: 'description',
    content: 'Oreoluwa is a Software engineer making things work on computers'
  })

  head.meta.push({
    name: 'view-port',
    content: 'width=device-width, initial-scale=1'
  })

  head.meta.push({
    name: 'apple-mobile-web-app-capable',
    content: 'yes'
  })

  head.meta.push({
    name: 'apple-mobile-web-app-status-bar-style',
    content: '#0D2538'
  })

  head.meta.push({
    property: 'og:url',
    content: 'https://oreoluwa.dev'
  })

  head.meta.push({
    property: 'og:title',
    content: 'Oreoluwa Ojo'
  })

  head.meta.push({
    property: 'og:description',
    content: 'Oreoluwa is a Software engineer making things work on computers'
  })

  head.meta.push({
    property: 'og:image',
    content: 'https://res.cloudinary.com/plushdeveloper/image/upload/v1571497666/open_graph_qqtxr3.png'
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image'
  })

  head.meta.push({
    name: 'twitter:site',
    content: '@ogbeniore'
  })

  head.meta.push({
    name: 'twitter:creator',
    content: '@ogbeniore'
  })

  head.meta.push({
    name: 'twitter:title',
    content: 'Oreoluwa Ojo'
  })

  head.meta.push({
    name: 'twitter:description',
    content: 'Oreoluwa is a Software engineer making things work on computers'
  })

  head.meta.push({
    name: 'twitter:image',
    content: 'https://res.cloudinary.com/plushdeveloper/image/upload/v1571498243/twitter_image_iqzuir.png'
  })
}
