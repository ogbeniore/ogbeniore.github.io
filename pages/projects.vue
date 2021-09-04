<template>
  <main class="container">
    <h1>Projects</h1>
    <p class="text-center">
      Here are a few of the projects I've worked on recently
    </p>
    <section class="projects">
      <article v-for="project in projects" :key="project.id" class="projects__item">
        <figure :class="project.isMobile ? 'mobile' : ''">
          <img :src="project.image" :alt="project.alt">
        </figure>
        <div class="projects__details">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <p>
            <b>Project Type:</b>
            {{ project.type }}
          </p>
          <p>
            <b>Tech Stack:</b>
            {{ project.stack }}
          </p>
        </div>
      </article>
    </section>
    <footer class="text-center">
      <a href="https://twitter.com/ogbeniore" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://linkedin.com/in/ogbeniore" target="_blank" rel="noopener noreferrer">Linkedin</a>
      <a href="https://github.com/ogbeniore" target="_blank" rel="noopener noreferrer">Github</a>
    </footer>
  </main>
</template>
<script>
export default {
  name: 'Projects',
  data: () => ({
    projects: [
      {
        id: 1,
        name: 'Tinylabs Apps',
        description: 'Tinylabs Apps is a directory of Progressive Web Apps, showcasing the best PWA examples.',
        type: 'Marketing Website, Dashboard',
        stack: 'HTML, SCSS, Vue, Vuex',
        image: '/tinylabs.webp',
        alt: 'A screenshot of the tinylabs appstore on an imac screen'
      },
      {
        id: 2,
        name: 'Chowdeck',
        description: 'Chowdeck is a food delivery company that’s making ordering food online faster for Nigerians.',
        type: 'Marketing Website',
        stack: 'HTML, CSS, Javascript',
        image: '/chowdeck.webp',
        alt: 'A screenshot of the chowdeck homepage on an imac screen'
      },
      {
        id: 3,
        name: 'Kafene',
        description: 'Kafene is focused on helping americans with credit scores below 650 purchase retail items  with its buy now, pay later (BNPL) model.',
        type: 'Marketing Website, Dashboard',
        stack: 'HTML, SCSS, Vue, Vuex, Nuxt',
        image: '/kafene.webp',
        alt: 'A screenshot of the kafene merchant dashboard on an imac screen'
      },
      {
        id: 4,
        name: 'Enyata',
        description: 'Enyata is a technology company providing engineering-as-a-service solutions at scale to organizations across multiple industries.',
        type: 'Marketing Website',
        stack: 'HTML, CSS, React, Next, StrapiJS',
        image: '/enyata.webp',
        alt: 'A screenshot of the enyata website on an imac screen'
      },
      {
        id: 5,
        name: 'Enyata BuildUp',
        description: 'Enyata Buildup is a project by Enyata used to provide learning resources/infrastructure and support 10,000 young Africans in their tech growth and journey over the next 5 years. ',
        type: 'Marketing Website',
        stack: 'HTML, CSS, Vue, Nuxt, StrapiJS',
        image: '/buildup.webp',
        alt: 'A screenshot of the enyata website on an imac screen'
      },
      {
        id: 6,
        name: 'Foodjaar',
        description: 'FoodJaar is an Online marketplace for farm produce (e.g: Tomato, Yam, Potato, Rice, ...) that offers you the LOWEST LAGOS MARKET PRICE as well as convinience through delivery within Lagos',
        type: 'PWA, Dashboard',
        stack: 'HTML, CSS, Vue',
        image: '/foodjaar.webp',
        alt: 'A screenshot of the foodjar on an iphone screen',
        isMobile: true
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';
$single: 2.6rem;
.container {
  max-width: 100rem;
}
.projects {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: $single * 2;
  margin-top: $single * 2;
  @include mq('md') {
    padding: 0 $single * 2;
    margin-top: $single * 4;
  }
  @include mq('lg') {
    margin-top: $single * 6;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: $single * 2;
  }
  &__item {
    figure {
      background:  rgba($purple, 0.2);
      width: 100%;
      max-width: 50rem;
      padding: $single;
      border-radius: 0.8rem;
      @include mq('md') {
        padding: $single * 2
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  &__details {
    margin-top: $single;
    h2 {
      font-size: 1.6rem;
      line-height: 1.8rem;
      font-weight: 500;
      @include mq('md') {
        font-size: 3.6rem;
        line-height: 4.2rem;
      }
      + p {
        margin-top: 1.3rem;
      }
    }
    p {
      margin-top: $single;
    }
  }
}
</style>
