<template>
  <div class="my-8">
    <h1 class="text-3xl">About Me</h1>
    <br />
    <div class="flex flex-col sm:flex-row sm:gap-6 gap-2">
      <div class="sm:w-1/3">
        <img class="sm:h-80 h-48 object-cover filter grayscale" src="~/static/personal_photo.jpg" alt="about-me-photo" />
        <div class="flex flex-row gap-4 mt-4 items-center filter saturate-50">
          <a target="_blank" href="https://www.credly.com/badges/de668972-bb3d-459d-8df0-5bc8cf2f0561/public_url">
            <img
              class="sm:h-20 h-10 object-cover"
              src="~/static/aws-saa.png"
              alt="aws-saa"
              title="AWS Certified Solutions Architect - Associate"
            />
          </a>
          <a target="_blank" href="https://bcert.me/sprmwekjw">
            <img class="sm:h-24 h-12 object-cover" src="~/static/csm.png" alt="csm" title="Certified ScrumMaster" />
          </a>
        </div>
      </div>
      <div class="sm:w-2/3 text-justify">
        <p>
          My name is Teng Wei Song. I am currently working in Singapore as a full-time software developer who builds
          both websites and web applications. As both <b>AWS Certified Solutions Architecture Associate</b> and
          <b>ScrumAlliance Certified ScrumMaster</b>, I am not only able to code software products, but also provide web
          solutions, design cloud architectures, and manage projects with Scrum.
        </p>
        <br />
        <p>
          My main skills in web development include building web backend using both .NET and Node.js frameworks as well
          as frontend using Sitefinity, Vue.js, and Nuxt.js. C# and JavaScript/TypeScript are two programming languages
          that I use. The myraid of skills that I possess allows me to be well-rounded and offer multiple ideas.
        </p>
        <br />
        <div class="flex flex-wrap flex-row gap-4 mt-4 items-center filter grayscale">
          <img class="h-6 sm:h-6 object-cover" src="~/static/c-sharp.png" alt="c-sharp" title="C#" />
          <img class="h-6 sm:h-6 object-cover" src="~/static/dotnetcore.png" alt="dotnetcore" title=".NET Core" />
          <img class="h-6 sm:h-6 object-cover" src="~/static/sitefinity.png" alt="sitefinity" title="Sitefinity" />
          <img class="h-6 sm:h-6 object-cover" src="~/static/javascript.png" alt="javascript" title="JavaScript" />
          <img class="h-6 sm:h-6 object-cover" src="~/static/typescript.png" alt="typescript" title="TypeScript" />
          <img class="h-6 sm:h-6 object-cover" src="~/static/node.png" alt="node" title="Node" />
          <img class="h-6 sm:h-6 object-cover" src="~/static/vue.png" alt="vue" title="Vue" />
          <img class="h-6 sm:h-6 object-cover" src="~/static/strapi.png" alt="strapi" title="Strapi" />
          <img class="h-6 sm:h-6 object-cover" src="~/static/nuxt.png" alt="nuxt" title="Nuxt" />
          <img class="h-6 sm:h-6 object-cover" src="~/static/git.png" alt="git" title="Git" />
          <img class="h-6 sm:h-6 object-cover" src="~/static/docker.png" alt="docker" title="Docker" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Teng Wei Song | About',
    };
  },
};
</script>
