<template>
  <default-layout>
    <main class="content-container">
      <h1 class="page-title">About Me</h1>
      <article>
        <section>
          <h2>Background</h2>
          <p>
            I develop web and desktop applications, with a strong background in
            .NET/.NET Core framework. I have a passion in building software
            products that are user-friendly while maintaining high code quality.
          </p>
          <p>
            In my current job, I use Sitefinity and .NET MVC to build websites
            for clients to suit their needs. Before transitioning to becoming a
            software developer, I was an administration officer and a
            researcher. The multi-industry experience has definitely helped me
            to see more.
          </p>
          <p>
            I believe software development is a fast-paced and endless journey,
            and it is the motivation that continues to push me to constantly
            strengthen and widen my skills.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Competences</h2>
          <p>
            The list of main skills that helps me to do my job includes the
            following:
          </p>
          <div class="content-competences-container">
            <g-image src="~/assets/CSharp.png" alt="C#" title="C#" />
            <g-image
              src="~/assets/DotNetCore.png"
              alt=".NET Core"
              title=".NET Core"
            />
            <g-image
              src="~/assets/Sitefinity_logo.png"
              alt="Sitefinity"
              title="Sitefinity"
            />
            <g-image
              src="~/assets/JavaScript.png"
              alt="JavaScript"
              title="JavaScript"
            />
            <g-image src="~/assets/Vue.png" alt="Vue" title="Vue" />
            <g-image src="~/assets/Git.png" alt="Git" title="Git" />
            <g-image src="~/assets/Docker.png" alt="Docker" title="Docker" />
          </div>
          <p>
            C# and .NET Core have been the foundation and the combination is
            versatile enough to adapt to different situation. It lays the
            foundation for me to build RESTful services, desktop applications,
            web applications, and even content management system (Sitefinity).
          </p>
          <p>
            JavaScript, on the other hand, has helped me to create front-end or
            the UI component of a complete web application, both as the "View"
            in a ASP.NET MVC architecture and a Vue single page application.
          </p>
          <p>
            Git is my favourite tool to manage my source code, keep track of
            code version, and collaborate with others. Using Git, I store my
            source code in Github that allows me to access my work everywhere.
          </p>
          <p>
            Deployment gets really easy with Docker. More oftern than not, I
            pack my compiled files into a Docker image that can be downloaded
            and run on various platforms easily. It helps me to set up a
            continuous integration and continuous deployment workflow to speed
            up processes.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Work Experiences</h2>
          <div class="content-work-experiences-container">
            <div>
              <h3>Websparks Pte Ltd</h3>
              <div class="position-duration-container">
                <p class="position">.NET Developer</p>
                <p class="duration">July 2019 - Present</p>
              </div>
            </div>
            <ul>
              <li>
                <p>
                  Developing and maintaining websites for agencies including
                  Ministry of Finance (MOF), Auditor-General's Office (AGO), and
                  Civil Aviation Authority of Singapore (CAAS).
                </p>
              </li>
            </ul>
          </div>
          <br />
          <div class="content-work-experiences-container">
            <div>
              <h3>Curtin Singapore</h3>
              <div class="position-duration-container">
                <p class="position">Quality and Compliance Officer</p>
                <p class="duration">October 2016 - April 2019</p>
              </div>
            </div>
            <ul>
              <li>
                <p>
                  Main duties include internal audit, document control,
                  feedback, and survey management.
                </p>
              </li>
              <li>
                <p>
                  Developed Windows desktop applications with .NET with ASP.NET
                  Core backend services to improve company document control and
                  feedback systems.
                </p>
              </li>
            </ul>
          </div>
          <br />
          <div class="content-work-experiences-container">
            <div>
              <h3>Nanyang Technological University</h3>
              <div class="position-duration-container">
                <p class="position">Project Officer</p>
                <p class="duration">September 2013 - April 2016</p>
              </div>
            </div>
            <ul>
              <li>
                <p>
                  Built an adsorption cooling system to study its heat and mass
                  transfer performance.
                </p>
              </li>
              <li>
                <p>
                  Developed multi-threaded simulation program using C# for heat
                  and mass transfer mathematical model for adsorption cooling
                  system.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <br />
        <br />
        <section>
          <h2>Education</h2>
          <h3>Nanyang Technological University</h3>
          <div class="position-duration-container">
            <p class="position">
              Bachelor of Engineering (Mechanical Engineering)
            </p>
            <p class="duration">2009 - 2013</p>
          </div>
          <p>Second Class (Upper) Honours</p>
        </section>
        <br />
        <br />
        <section>
          <h2>Certificates</h2>
          <h3>Certified ScrumMaster&copy;</h3>
          <div class="position-duration-container">
            <p class="position">
              Scrum Alliance
            </p>
            <p class="duration">2021</p>
          </div>
          <p>
            <g-image src="~/assets/seal-csm.png" alt="CSM" title="CSM seal" />
          </p>
        </section>
        <br />
        <br />
      </article>
    </main>
  </default-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About"
  }
};
</script>

<style>
@import url("../assets/aboutpage.css");
</style>
