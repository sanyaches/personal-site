<template>
  <div class="about initial-page-padding">
    <div class="single-page-container about__container">
      <section class="about__first-section">
        <div class="container-m">
          <div class="about__header">
            <h1>About my steps in web development career</h1>
            <h2>My story</h2>
          </div>
          <div class="story-section">
            <div class="story-section__image">
              <img src="~/assets/images/about/01-intro.png" alt="Intro" loading="lazy">
            </div>
            <div class="story-section__text">
              <p>
                Hi there! If you're reading this, you probably want to know me better.
              </p>
              <p>
                I can tell you my story. My name is Aleksandr, I'm 25, I live in Turkey with my lovely family.
              </p>
              <p>Almost forgot, I'm a professional web developer!</p>
            </div>
          </div>
          <div class="story-section">
            <div class="story-section__image">
              <img src="~/assets/images/about/02-university.png" alt="University" loading="lazy">
            </div>
            <div class="story-section__text">
              <p>
                I've been interested in Web development for the first time in 2017. At that moment I was a 3d year student on Computer Security Master course at my hometown's university - Orenburg State University.
              </p>
              <p>I'd already have 4 years of some amateur programming experience using various languages: C++/C#, Python. I'd been writing some algorithms for my studying.</p>
            </div>
          </div>
          <div class="story-section">
            <div class="story-section__image">
              <img src="~/assets/images/about/03-web.png" alt="First web" loading="lazy">
            </div>
            <div class="story-section__text">
              <p>
                But I was shocked by magic how easily I can render anything in Web pages. So I decided to dive deeper into it.
              </p>
              <p>The next year past in studying Web-technologies, like HTML, CSS, JavaScript</p>
              <p>And I was lucky to have some internship in small student companies where I was introduced with commercial side of web development.</p>
            </div>
          </div>
          <div class="story-section">
            <div class="story-section__image">
              <img src="~/assets/images/about/04-techs.png" alt="Web studio and top techs" loading="lazy">
            </div>
            <div class="story-section__text">
              <p>
                After that interesting time I worked at web studio, building amazing websites for local customers.
              </p>
              <p>In parallel I studied frameworks and other top web technologies</p>
              <p>Praise the Universe, I have background in Computer science, it helped to structure my knowledge</p>
            </div>
          </div>
          <div class="story-section">
            <div class="story-section__image">
              <img src="~/assets/images/about/05-startup.png" alt="Startup experience" loading="lazy">
            </div>
            <div class="story-section__text">
              <p>
                When I felt I'm ready I quit my web studio job and started working remotely for international startups.
              </p>
              <p>My first startup job was a frontend developer position at law company with huge ambitions where I was building an online editor and storage for law documents.</p>
              <p>I like to work in fast growing startup environment, and to work full-focused on building a concrete product.</p>
            </div>
          </div>
          <div class="story-section">
            <div class="story-section__image">
              <img src="~/assets/images/about/06-europe.png" alt="Europe" loading="lazy">
            </div>
            <div class="story-section__text">
              <p>I've always wanted to relocate to Europe. And I found a great opportunity to work for German startup to know European culture better and their values.</p>
              <p>I also traveled to Europe, it was above all my expectations I was shocked by a high level of life.</p>
            </div>
          </div>
          <div class="story-section">
            <div class="story-section__image">
              <img src="~/assets/images/about/10-outro.png" alt="Entrepreneur, outro" loading="lazy">
            </div>
            <div class="story-section__text">
              <p>
                I had an entrepreneur experience, I and my wife set up a business - online hairstyles education platform.
                I'm so proud that I developed this whole platform by myself and we lead customers to this platform.
              </p>
              <p>
                Now I'm open to new challenges and career opportunities.
              </p>
            </div>
          </div>
          <div class="section-margin-xl">
            <q class="quote">
              <b>”Where there’s a will, there’s a way”</b>
              <br>
              My favorite proverb
            </q>
          </div>
        </div>
      </section>
      <section>
        <div class="container-m">
          <hr>
          <div class="section-margin-m">
            <BlocksContactMeLead />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: 'light',
})
</script>

<style lang="scss" scoped>
.about {
  &__header,
  &__first-section {
    margin-bottom: 3.75rem;

    @include media-breakpoint-up(md) {
      margin-bottom: 5rem;
    }

    @include media-breakpoint-up(xl) {
      margin-bottom: 7.5rem;
      margin-top: 3.75rem;
    }
  }

  &__header h1 {
    color: var(--text-color-light);
    font-size: 1.3125rem;
    font-weight: 544;
    letter-spacing: -0.010625em;
    margin-bottom: 1.4375rem;
    margin-top: 0.875rem;
  }

  &__header h2 {
    font-variation-settings: "wght" 669;
    letter-spacing: -0.0307em;
    font-size: 3.3125rem;
    line-height: 2.25rem;
    font-weight: 700;

    @include media-breakpoint-down(md) {
      font-size: 4.5rem;
      line-height: 5rem;
      letter-spacing: -0.0269em;
    }
  }

  &__text {
    margin-top: 0.75rem;
    max-width: 37em;
  }
  
  &__text p {
    margin: 1rem 0;
  }
}

.story-section {
  max-width: 940px;
  margin: 0 auto 3.5rem;
  
  @include media-breakpoint-up(md) {
    display: flex;
    margin-bottom: 4.75rem;
  }
  
  &__image {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    line-height: 0;
    
    @include media-breakpoint-up(md) {
      width: 450px;
    }
  }

  &__image img {
    width: 100%;
    height: auto;
  }
  
  &__text {
    flex: 1 1 auto;
    padding-top: 1.25rem;
    margin: 0;
    text-align: justify;
    
    @include media-breakpoint-up(md) {
      padding: 0 1rem 0 4rem;
    }
  }
}

hr {
  height: 1px;
  outline: none;
  border: none;
  margin: 0 auto;
  padding: 0;
  display: block;
  width: 100%;
  border-top: 1px solid var(--border-color-regular);
}
.quote {
  font-size: 1.5em;
  font-weight: 430;
  line-height: 1.375;
  letter-spacing: -0.015em;

  &::before, &::after {
    content: none;
  }
}
</style>