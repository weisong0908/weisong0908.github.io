<template>
  <default-layout>
    <main class="content-container">
      <h1 class="page-title">My Works</h1>
      <p>
        These are the projects that I have been involved in, both in my work and
        in my spare time.
      </p>
      <article>
        <section>
          <h2>
            Professional Projects
          </h2>
          <h3>Ministry Of Finance</h3>
          <small class="project-summary">
            Website for Ministry of Finance of Singapore
          </small>
          <div class="tag-container">
            <div class="tag tag-framework">
              Sitefinity
            </div>
            <div class="tag tag-language">
              C#
            </div>
          </div>
          <p>
            This project is a revamped website for Ministry of Finance of
            Singapore. The website is built on Sitefinity CMS with various
            customisations that extend the basic out-of-the-box functions.
          </p>
          <div class="project-links">
            <a class="bordered" href="https://www.mof.gov.sg"
              >Visit the website</a
            >
          </div>
          <br />
          <h3>Open Innovation Network</h3>
          <small class="project-summary">
            Website for Open Innovation Network
          </small>
          <div class="tag-container">
            <div class="tag tag-framework">
              Sitefinity
            </div>
            <div class="tag tag-language">
              C#
            </div>
          </div>
          <p>
            This project is a website for Open Innovation Network, the
            collaboration set up by Enterprise Singapore and the Infocomm Media
            Development Authority (IMDA) to provide a single gateway to the open
            innovation ecosystem in Singapore. Similar to the above MOF project
            above, this website is built on Sitefinity CMS with various
            customisations that extend the basic out-of-the-box functions.
          </p>
          <div class="project-links">
            <a class="bordered" href="https://www.openinnovationnetwork.gov.sg"
              >Visit the website</a
            >
          </div>
          <br />
          <h3>Document Controller</h3>
          <small class="project-summary"
            >A Windows desktop application that manages company documents</small
          >
          <div class="tag-container">
            <div class="tag tag-framework">
              .NET WPF
            </div>
            <div class="tag tag-language">
              C#
            </div>
            <div class="tag tag-language">
              XAML
            </div>
            <div class="tag tag-other">
              Microsoft Access
            </div>
          </div>
          <p>
            This project is a document control system designed for Curtin
            Singapore to ensure existence of controlled processes and practices
            for the creation, review, modification, issuance, distribution, and
            accessibility of documents. It is an improvement project to replace
            the existing manual process.
          </p>
          <p>
            The following table shows the improvement this project can bring to
            the existing manual document control system processes.
          </p>
          <table>
            <thead>
              <tr>
                <th>Old System</th>
                <th>The New Document Controller</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Users submit request forms in hard-copy to managers. Upon
                  approval, managers enter the document information into Excel
                  spreadsheet and duplicate the documents in respective folders
                  in shared drive.
                </td>
                <td>
                  Users submit request forms in soft-copy to managers. Upon
                  approval, managers enter the document information into the
                  Document Controller. The Document Controller will then copy
                  the document to proper location in shared drive automatically,
                  saving time and resources while minimising human error.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The project consists of both front and back ends in a multi-layer
            architecture. Due to the restriction of company policy, both project
            front and back ends were combined into one WPF application. The MVVM
            (model-view-view model) pattern is adopted.
          </p>
          <table>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Language</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Presentation layer, front-end
                </td>
                <td>C#, XAML</td>
                <td>
                  They are the views in the MVVM pattern. Data binding is used
                  to bind the displayed data with view models.
                </td>
              </tr>
              <tr>
                <td>Business logic layer, front-end</td>
                <td>C#, AutoMapper</td>
                <td>
                  They are the view models in the MVVM pattern. AutoMapper is
                  used to convert domain model objects to view model objects
                  that are suitable for display to users.
                </td>
              </tr>
              <tr>
                <td>Service layer, front-end</td>
                <td>C#</td>
                <td>
                  They are the models in the MVVM pattern. The service classes
                  are used to interact with data from back ends
                </td>
              </tr>
              <tr>
                <td>Data access layer, back-end</td>
                <td>C#, .NET Framework Data Provider for OLE DB</td>
                <td>
                  The NET Framework Data Provider for OLE DB for Microsoft
                  Access is used to access data from .mdb file.
                </td>
              </tr>
              <tr>
                <td>Database layer, back-end</td>
                <td>Microsoft Access database (.mdb)</td>
                <td>
                  There is no plan to have a dedicated server, therefore the
                  viable option is to use the Microsoft Access which is placed
                  and shared in company shared drive. Migration to use SQL
                  Server or PostgreSQL can be easy done as the layers are
                  dependent on abstraction.
                </td>
              </tr>
            </tbody>
          </table>
          <div class="project-links">
            <a
              class="bordered"
              href="https://github.com/weisong0908/document-controller"
              >Github repository</a
            >
          </div>
        </section>
        <br />
        <br />
        <section>
          <h2>Personal Projects</h2>
          <h3>Coffee Shop Talk</h3>
          <small class="project-summary"
            >A web real-time text-based chat application</small
          >
          <div class="tag-container">
            <div class="tag tag-framework">
              Vue
            </div>
            <div class="tag tag-framework">
              ASP.NET Core Web API
            </div>
            <div class="tag tag-language">
              JavaScript
            </div>
            <div class="tag tag-language">
              C#
            </div>
            <div class="tag tag-other">
              SignalR
            </div>
            <div class="tag tag-other">
              Auth0
            </div>
            <div class="tag tag-other">
              Docker
            </div>
            <div class="tag tag-other">
              CICD
            </div>
            <div class="tag tag-other">
              NGINX
            </div>
          </div>
          <p>
            This project is created as a simple real-time chat application that
            allows users to sign up and chat with each other. The intention is
            to build a chat application that does not require friends adding -
            chat is public, like in a coffee shop.
          </p>
          <p>
            Vue is used as the front-end component of the application because
            single page application is fast and more suitable for web
            applications. The back-end component is build with ASP.NET Core Web
            API, which uses SignalR to achieve real-time data transfering.
          </p>
          <p>
            Auth0 is used as identity service provider for user authentication
            and authorisation.
          </p>
          <p>
            Docker, combined with Github Actions, is used to achieve continuous
            integration and continuous deployment (CICD). With the process set
            up, upon receiving new commits on certain branch, Github builds the
            code, prepares docker image, pushes the docker image to Docker Hub,
            accesses to server through SSH, pulls the Docker image, and finally
            runs it. This allows my changes are seen immediately.
          </p>
          <p>
            The application is hosted on my server using NGINX as reverse proxy.
          </p>
          <div class="project-links">
            <a
              class="bordered"
              href="https://coffee-shop-talk-vue-stg.tengweisong.com/#/"
              >Demo (temporarily unavailable to save cost)</a
            >
            <a
              class="bordered"
              href="https://github.com/weisong0908/CoffeeShopTalk.Vue"
              >Github repository (Vue)</a
            >
            <a
              class="bordered"
              href="https://github.com/weisong0908/CoffeeShopTalk.WebApi"
              >Github repository (.NET Core Web API)</a
            >
          </div>
          <br />
          <h3>Design Patterns</h3>
          <small class="project-summary"
            >Showcasing design patterns in C#</small
          >
          <div class="tag-container">
            <div class="tag tag-language">
              C#
            </div>
          </div>
          <p>
            Design patterns are typical solutions to common problems in software
            design. Each of these used as a blueprint or base that can be
            further customised to suit unique requirement.
          </p>
          <p>
            This project consists of examples of the most popular design
            patterns and is written in C#. It is usually used as my reference
            point or source of inspiration.
          </p>
          <div class="project-links">
            <a
              class="bordered"
              href="https://github.com/weisong0908/design-patterns"
              >Github repository</a
            >
          </div>
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
    title: "Works"
  }
};
</script>

<style>
@import url("../../assets/workspage.css");
</style>
