import React from 'react';
import { Link } from '@reach/router';
import './style.scss';

const ModeMediumPost = () => (
  <div className="medium-article article-content">
    <article className="h-entry">
      <header>
        <h1 className="p-name">Introducing the Mode Design System</h1>
      </header>
      <section data-field="subtitle" className="p-summary">
        Building a shared experience language at Stitch Fix
      </section>
      <section data-field="body" className="e-content">
        <section name="0201" className="section section--body section--first">
          <div className="section-divider">
            <hr className="section-divider" />
          </div>
          <div className="section-content">
            <nav className="breadcrumb">
              <Link to={`/work`}>« Work Highlights</Link>
            </nav>
            <div className="section-inner sectionLayout--insetColumn">
              <h3 name="4618" id="4618" className="graf graf--h3 graf--leading graf--title">Introducing the Mode Design System</h3>
              <h4 name="edab" id="edab" className="graf graf--h4 graf-after--h3 graf--subtitle subtitle">Building a shared experience language at Stitch Fix</h4>
            </div>
            <div className="section-inner sectionLayout--outsetColumn">
              <figure name="3527" id="3527" className="graf graf--figure graf--layoutOutsetCenter graf-after--h4">
                <div className="aspectRatioPlaceholder is-locked" style={{maxWidth: '1192px', maxHeight: '335px'}}>
                  <div className="aspectRatioPlaceholder-fill" style={{paddingBottom: '28.1%'}}></div><img className="graf-image" data-image-id="1*QyZDPuBjfzj8syeEryFt4A.png" data-width="2040" data-height="573" data-focus-x="10" data-focus-y="19"
                    data-is-featured="true" alt="A screenshot of a sampling of colors from the Mode color palette" src="https://cdn-images-1.medium.com/max/1200/1*QyZDPuBjfzj8syeEryFt4A.png" />
                </div>
                <figcaption className="imageCaption">Some of the colors from the Mode color palette</figcaption>
              </figure>
            </div>
            <div className="section-inner sectionLayout--insetColumn">
              <blockquote name="a2a8" id="a2a8" className="graf graf--blockquote graf-after--figure"><strong className="markup--strong markup--blockquote-strong"><em className="markup--em markup--blockquote-em">Mode</em></strong><br /><em
                  className="markup--em markup--blockquote-em">1. </em>a way or manner in which something is experienced, expressed, or done.<em className="markup--em markup--blockquote-em"><br />2. </em>a fashion or style in clothes, art, literature, etc.<br />3.
                the design system that supports our digital product at Stitch Fix</blockquote>
              <p name="af3a" id="af3a" className="graf graf--p graf-after--blockquote">The <strong className="markup--strong markup--p-strong">Mode Design System </strong>was created to support higher quality digital products that are compelling, consistent,
                and inclusive for everybody. The Stitch Fix client experience is the heart of this goal, but the design system is used and informed by product teams who create these wonderful digital products.</p>
              <p name="96a4" id="96a4" className="graf graf--p graf-after--p">Our company culture is guided by a set of principles called the Stitch Fix OS. When we set out to create a design system, we knew that our product teams were already operating
                under these principles as business units. But even though individual teams exemplify these values, we lacked a larger community across our product teams which made it difficult to share knowledge and partner cross-functionally. As
                designers, we found ourselves creating bespoke solutions far more often than was necessary.</p>
              <p name="1e45" id="1e45" className="graf graf--p graf-after--p">But—rooted in these values—our teams were beyond ready to accept a new way of working together under guidance from the Mode Design System. </p>
              <figure name="84be" id="84be" className="graf graf--figure graf-after--p">
                <div className="aspectRatioPlaceholder is-locked" style={{maxWidth: '590px', maxHeight: '524px'}}>
                  <div className="aspectRatioPlaceholder-fill" style={{paddingBottom: '88.8%'}}></div><img className="graf-image" data-image-id="1*lLXXqOyL3_e3hYPAYj9eWg.png" data-width="590" data-height="524"
                    alt="The Stitch Fix OS: guidelines for company culture. E.g. Our people are bright, kind, and motivated by challenge." src="https://cdn-images-1.medium.com/max/800/1*lLXXqOyL3_e3hYPAYj9eWg.png" />
                </div>
                <figcaption className="imageCaption">The Stitch Fix OS guides how we work together</figcaption>
              </figure>
              <p name="5c08" id="5c08" className="graf graf--p graf-after--figure">It’s been my privilege to help create, kick off, and grow the Mode Design System over the past year. In this article, I’d like to share some of personal takeaways over the
                past several months of creating and developing Mode at Stitch Fix.</p>
              <h3 name="958b" id="958b" className="graf graf--h3 graf-after--p">A Brief History</h3>
              <p name="a618" id="a618" className="graf graf--p graf-after--h3">The design system was an idea in the making for years before the true <em className="markup--em markup--p-em">problem to solve</em> coalesced and before we were given the runway to
                make it a major strategic initiative. Eventually, with the support of leadership, we were able to form a new team called the Design Platform team. Design Platform would focus on scaling the design of Stitch Fix products by providing
                product teams with systemic guidance, tooling, automation, and process improvements. The design system would be our primary product.</p>
              <h4 name="f436" id="f436" className="graf graf--h4 graf-after--p">So What Problem Are We Trying to Solve?</h4>
              <p name="fff1" id="fff1" className="graf graf--p graf-after--h4"><em className="markup--em markup--p-em">How will we continue to design and build consistent, engaging products at scale?</em></p>
              <blockquote name="5e0c" id="5e0c" className="graf graf--pullquote graf-after--p">You could outline our org chart in the inconsistencies between product experiences.</blockquote>
              <p name="f5d7" id="f5d7" className="graf graf--p graf-after--pullquote">Over time, our customer experience had become fractured. There were unintended, yet noticeable, differences between interface and interaction design depending on what
                part of Stitch Fix you were experiencing. You could essentially outline our product org chart in the inconsistencies between product experiences. Systemic changes needed to happen to the ways our teams designed and built product.</p>
              <p name="be0f" id="be0f" className="graf graf--p graf-after--p">It was an ambitious goal that couldn’t be solved by any single framework or library. What we were actually talking about was fundamentally changing how our product teams
                communicated about design. If we could set up the foundation for standards and practices, communication, and feedback, we could develop the <em className="markup--em markup--p-em">experience language</em> of Stitch Fix.</p>
              <figure name="3c0b" id="3c0b" className="graf graf--figure graf-after--p">
                <div className="aspectRatioPlaceholder is-locked" style={{maxWidth: '700px', maxHeight: '364px'}}>
                  <div className="aspectRatioPlaceholder-fill" style={{paddingBottom: '51.9%'}}></div><img className="graf-image" data-image-id="1*ZwlAJNfj7LsIx-cw-1rNig.png" data-width="1113" data-height="578"
                    alt="A design audit that shows multiple versions of “How It Works” steps in the UI" src="https://cdn-images-1.medium.com/max/800/1*ZwlAJNfj7LsIx-cw-1rNig.png" />
                </div>
                <figcaption className="imageCaption">Reinventing the wheel: half a dozen different ways to say the same thing, built by 6 different teams</figcaption>
              </figure>
              <h3 name="28dd" id="28dd" className="graf graf--h3 graf-after--figure">The Experience Language</h3>
              <p name="a775" id="a775" className="graf graf--p graf-after--h3">In one way or another, we had already known for years that we wanted a design system. Maybe we didn’t know what to call it or what to build, but we had been collecting the
                evidence for a long time in the forms of tech debt, inconsistent UX, and knowledge silos² between teams. These barriers would surface as low quality UI, inconsistent design and code, and inaccessible digital content.</p>
              <blockquote name="b33c" id="b33c" className="graf graf--pullquote graf-after--p">Without a design system, the system designs itself.</blockquote>
              <p name="9bd5" id="9bd5" className="graf graf--p graf-after--pullquote">The <em className="markup--em markup--p-em">experience language</em> would be how we communicate and collaborate within the design system and . It would be a set of
                guidelines that influenced all of our product design and delivery. In practice, this meant that we would constrain the many different ways we communicate design, standardize our UI, limit design choices, and set rules for the design
                system so that we could all “speak the same language.” Because without a design system, the system designs itself³.</p>
              <p name="dec4" id="dec4" className="graf graf--p graf-after--p">We needed to ask ourselves “Did we already solve this before?” If the answer is “yes,” then: cool, let’s move on to bigger problems to solve. If the answer is “no,” then we now
                we would have a framework for responsibly designing a solution.</p>
              <h3 name="237c" id="237c" className="graf graf--h3 graf-after--p">Transforming the Way We Work Together</h3>
              <p name="d1bf" id="d1bf" className="graf graf--p graf-after--h3">We’d gotten buy-in, formed a team, gathered evidence, and defined the problem. Now we had a world of options in front of us. Where to begin? How do we start tearing down those
                barriers?</p>
              <blockquote name="b767" id="b767" className="graf graf--blockquote graf-after--p">It isn’t the mountains ahead to climb that wear you out,<br />it’s the pebble in your shoe.⁴</blockquote>
              <p name="8283" id="8283" className="graf graf--p graf-after--blockquote">Like every major initiative at Stitch Fix, we wanted to break it down into smaller parts and begin testing our assumptions. At first, we focused solely on the
                customer-facing product design team. Over the past 6+ years, the design team had accumulated mountains of designs that have existed across cloud servers and hard drives galore (Box, Dropbox, Google Drive, Zeplin, Invision, Sketch, and
                more). How might we unify our workflows? Bring order out of chaos?</p>
              <p name="ee5c" id="ee5c" className="graf graf--p graf-after--p">Our explorations led us down many paths of tooling options. In the end, we decided we would be best served by hosting our shared design assets in one place: <a
                  href="https://www.figma.com/" data-href="https://www.figma.com/" className="markup--anchor markup--p-anchor" rel="noopener noreferrer" target="_blank">Figma</a>. We immediately began building a library of shared design elements that would exist in
                one cloud-based location and be accessible by anyone with a Stitch Fix email. Our hypothesis was that—even though we were introducing a new workflow—we would see efficiency gains across both design and development via the collaborative
                nature of the tool.</p>
              <figure name="d919" id="d919" className="graf graf--figure graf-after--p">
                <div className="aspectRatioPlaceholder is-locked" style={{maxWidth: '700px', maxHeight: '395px'}}>
                  <div className="aspectRatioPlaceholder-fill" style={{paddingBottom: '56.49999999999999%'}}></div><img className="graf-image" data-image-id="1*qViiwSy9s-svx0ubynBz5Q.png" data-width="2340" data-height="1322"
                    alt="Screenshots of Figma with UI components and collaboration highlighted" src="https://cdn-images-1.medium.com/max/800/1*qViiwSy9s-svx0ubynBz5Q.png" />
                </div>
                <figcaption className="imageCaption">Cross-functional collaboration via Figma</figcaption>
              </figure>
              <p name="94ff" id="94ff" className="graf graf--p graf-after--figure">We introduced this tool to our customer-facing product design team first (about 8 designers). The experiment for each design: use this tool in your design workflow,
                collaborate with your eng partners in Figma, lean on the Design Platform team for help along the way, but avoid falling back to other tools so you can identify pain points. It didn’t take long to hear positive reinforcement of this
                change, so we were quick to make a company-wide decision to adopt Figma as our design tool of choice. Software adoption at a company the size of Stitch Fix is no small feat, so this was a big win.</p>
              <h4 name="e811" id="e811" className="graf graf--h4 graf-after--p">Baby Steps Up the Mountain</h4>
              <p name="1296" id="1296" className="graf graf--p graf-after--h4">We had successfully begun to transform our multitudes of UIs into shared libraries in Figma. This was part of our goal to <em className="markup--em markup--p-em">design and build
                  consistent, engaging products at scale</em>, but we still needed our customer-facing engineering teams to stop developing ad hoc UI on a per-team and per-product basis.</p>
              <h4 name="8ff4" id="8ff4" className="graf graf--h4 graf-after--p">The Horizontal Slice Project</h4>
              <p name="eefd" id="eefd" className="graf graf--p graf-after--h4">Our team was small and our needs were large, so we continued on the way we knew best: iterate, learn, repeat. The <em className="markup--em markup--p-em">horizontal slice</em>
                project introduced a single component, served via npm package, across multiple customer-facing applications. Our goal was to receive feedback on the process of introducing a single-source component to teams of differing levels of front
                end experience across different front end architectures.</p>
              <p name="c7c9" id="c7c9" className="graf graf--p graf-after--p">And so, the <strong className="markup--strong markup--p-strong">Mode Style System</strong> was born.</p>
              <figure name="4fda" id="4fda" className="graf graf--figure graf-after--p">
                <div className="aspectRatioPlaceholder is-locked" style={{maxWidth: '700px', maxHeight: '90px'}}>
                  <div className="aspectRatioPlaceholder-fill" style={{paddingBottom: '12.9%'}}></div><img className="graf-image" data-image-id="1*ipVs2tOmhFvkvrWviOs1cA.png" data-width="1612" data-height="208"
                    alt="A screenshot of a CTA button in Mode and the code example to render it" src="https://cdn-images-1.medium.com/max/800/1*ipVs2tOmhFvkvrWviOs1cA.png" />
                </div>
                <figcaption className="imageCaption">From the code documentation, visualizing and explaining how to render a CTA button</figcaption>
              </figure>
              <blockquote name="8c5a" id="8c5a" className="graf graf--blockquote graf-after--figure">The <strong className="markup--strong markup--blockquote-strong">Mode Style System</strong> is a library made up of mostly <a
                  href="https://marksheet.io/sass-mixins.html" data-href="https://marksheet.io/sass-mixins.html" className="markup--anchor markup--blockquote-anchor" rel="noopener noreferrer" target="_blank">Sass mixins</a> and variables. It is a part of the larger
                Mode Design System and is responsible for generating the reusable digital assets, components, and design tokens that make up the visual UI of our products.</blockquote>
              <h3 name="6aec" id="6aec" className="graf graf--h3 graf-after--blockquote">Tailored to Stitch Fix</h3>
              <figure name="70a6" id="70a6" className="graf graf--figure graf-after--h3">
                <div className="aspectRatioPlaceholder is-locked" style={{maxWidth: '700px', maxHeight: '101px'}}>
                  <div className="aspectRatioPlaceholder-fill" style={{paddingBottom: '14.399999999999999%'}}></div><img className="graf-image" data-image-id="1*ktCdOmAJ5AlCPTKX_pPwJA.png" data-width="803" data-height="116"
                    alt="A screen shot of four versions of icons from our icon set" src="https://cdn-images-1.medium.com/max/800/1*ktCdOmAJ5AlCPTKX_pPwJA.png" />
                </div>
                <figcaption className="imageCaption">A sampling of our custom icon set</figcaption>
              </figure>
              <p name="7691" id="7691" className="graf graf--p graf-after--figure">There is no universal approach to design systems. A lot of our hypotheses for success are conceptually based on the work of others, then modified to be specific to the
                design principles and strategic goals of Stitch Fix. I’d like to share a few key takeaways I learned while retrofitting a design system to an enterprise product suite:</p>
              <ol className="postList">
                <li name="fe7b" id="fe7b" className="graf graf--li graf-after--p">🏁 A Design System is never “done”—it’s a living product and holds the same high-quality standards that any of our other products hold⁵. Prioritize it on your product
                  roadmap alongside other strategic initiatives.</li>
                <li name="ca2d" id="ca2d" className="graf graf--li graf-after--li">❄️ A Design System should draw inspiration from the work of others, but be specially curated for your users’ needs. Every step forward is prioritized by feedback (direct <em
                    className="markup--em markup--li-em">and</em> indirect) from our product teams.</li>
                <li name="488b" id="488b" className="graf graf--li graf-after--li">⛰ When facing a mountain of possible solutions, focus your energy on smaller, incremental improvements and rely on user feedback to help you prioritize next steps. Test the
                  design system with your users like you would any other high-impact product design.</li>
              </ol>
              <p name="a1af" id="a1af" className="graf graf--p graf-after--li">I’m leaving out <em className="markup--em markup--p-em">a lot</em> of the hard work and dead ends that we came upon. For example, we initially envisioned a “vertical slice” project
                that would entirely decorate a single page/experience on the site with coded components from the library. This was a heavy lift with potentially low value, so we scrapped it in favor of the horizontal slice project.</p>
              <p name="c6d0" id="c6d0" className="graf graf--p graf-after--p">I’m also leaving out the conversations, the presentations, the conferences, the inspirational advice from professionals, the articles, the drafts, the mocks, the critiques… all
                things that contributed to the design system. Any one of those things could be an article, but I’ll spare you this time!</p>
              <p name="5fac" id="5fac" className="graf graf--p graf-after--p">A lot of amazing work has gone into Mode since its conception. We’ve expanded the breadth of our tooling and the depth of our libraries and still there’s always a higher mountain
                ahead. However, based on the feedback we’ve received—qualitative <em className="markup--em markup--p-em">and</em> quantitative—we’re making huge leaps forward. Other improvements are subjective, immeasurable, or just hard to capture, but
                the great thing about a living design system is that, without a finish line, it can always be improved upon!</p>
              <p name="1d6d" id="1d6d" className="graf graf--p graf-after--p">A huge thank you to the folks who contributed to the success of this system thus far. You’re too many to list, but this couldn’t have happened without you. I look forward to the
                future of the Mode Design System and the new experiences that it has helped unlock at Stitch Fix!</p>
              <blockquote name="31e2" id="31e2" className="graf graf--blockquote graf-after--p">Design Platform at Stitch Fix is <a href="https://medium.com/u/50c6c9baeb71" data-href="https://medium.com/u/50c6c9baeb71" data-anchor-type="2"
                  data-user-id="50c6c9baeb71" data-action-value="50c6c9baeb71" data-action="show-user-card" data-action-type="hover" className="markup--user markup--blockquote-user" target="_blank" rel="noopener noreferrer">Brian Cleveland</a> &amp; <a
                  href="https://medium.com/u/717a9e8487bc" data-href="https://medium.com/u/717a9e8487bc" data-anchor-type="2" data-user-id="717a9e8487bc" data-action-value="717a9e8487bc" data-action="show-user-card" data-action-type="hover"
                  className="markup--user markup--blockquote-user" target="_blank" rel="noopener noreferrer">John Warren Hanawalt</a><br />In partnership with <a href="https://medium.com/u/82d5ae26fdc1" data-href="https://medium.com/u/82d5ae26fdc1" data-anchor-type="2"
                  data-user-id="82d5ae26fdc1" data-action-value="82d5ae26fdc1" data-action="show-user-card" data-action-type="hover" className="markup--user markup--blockquote-user" target="_blank" rel="noopener noreferrer">Torunn Skrogstad</a>, <a
                  href="https://medium.com/u/fc474d89a2bd" data-href="https://medium.com/u/fc474d89a2bd" data-anchor-type="2" data-user-id="fc474d89a2bd" data-action-value="fc474d89a2bd" data-action="show-user-card" data-action-type="hover"
                  className="markup--user markup--blockquote-user" target="_blank" rel="noopener noreferrer">Rob Wierzbowski</a>, and <a href="https://twitter.com/benmvp" data-href="https://twitter.com/benmvp" className="markup--anchor markup--blockquote-anchor" rel="noopener noreferrer"
                  target="_blank">Ben Ilegbodu</a></blockquote>
              <figure name="bf4e" id="bf4e" className="graf graf--figure graf-after--blockquote graf--trailing">
                <div className="aspectRatioPlaceholder is-locked" style={{maxWidth: '700px', maxHeight: '700px'}}>
                  <div className="aspectRatioPlaceholder-fill" style={{paddingBottom: '100%'}}></div><img className="graf-image" data-image-id="0*20k6meB37LC5IA9E" data-width="4912" data-height="4912" data-unsplash-photo-id="cU2lda3kbls"
                    alt="A camera that has been taken apart and all pieces carefully organized" src="https://cdn-images-1.medium.com/max/800/0*20k6meB37LC5IA9E" />
                </div>
              </figure>
            </div>
          </div>
        </section>
        <section name="02c3" className="section section--body section--last">
          <div className="section-divider">
            <hr className="section-divider" />
          </div>
          <div className="section-content">
            <div className="section-inner sectionLayout--insetColumn">
              
                <ol className="postList">
              <li name="b016" id="b016" className="graf graf--li graf--leading">(Original definition edited out of final draft, but here is a solid definition of “design systems”) Defining design systems via <a
                      href="https://www.designbetter.co/design-systems-handbook/introducing-design-systems" data-href="https://www.designbetter.co/design-systems-handbook/introducing-design-systems" className="markup--anchor markup--li-anchor" rel="noopener noreferrer"
                      target="_blank">Introducing design systems</a></li>
                  <li name="9810" id="9810" className="graf graf--li graf-after--li">Listen to <a href="https://medium.com/u/b954a8b795dc" data-href="https://medium.com/u/b954a8b795dc" data-anchor-type="2" data-user-id="b954a8b795dc"
                      data-action-value="b954a8b795dc" data-action="show-user-card" data-action-type="hover" className="markup--user markup--li-user" target="_blank" rel="noopener noreferrer">Diana Mounter</a> talk about <a href="https://www.designbetter.co/podcast/diana-mounter"
                      data-href="https://www.designbetter.co/podcast/diana-mounter" className="markup--anchor markup--li-anchor" rel="noopener noreferrer" target="_blank">design silos at designbetter.co</a></li>
                  <li name="03fc" id="03fc" className="graf graf--li graf-after--li">I attribute this to <a href="https://medium.com/u/717a9e8487bc" data-href="https://medium.com/u/717a9e8487bc" data-anchor-type="2" data-user-id="717a9e8487bc"
                      data-action-value="717a9e8487bc" data-action="show-user-card" data-action-type="hover" className="markup--user markup--li-user" target="_blank" rel="noopener noreferrer">John Warren Hanawalt</a> from our first tech summit talk about design systems at Stitch Fix
                  </li>
                  <li name="fcbd" id="fcbd" className="graf graf--li graf-after--li">Attributed to different sources, popularized by Muhammad Ali<br /><a href="https://quoteinvestigator.com/2013/06/23/sand-in-shoe/"
                      data-href="https://quoteinvestigator.com/2013/06/23/sand-in-shoe/" className="markup--anchor markup--li-anchor" rel="noopener noreferrer" target="_blank">via Quote Investigator</a></li>
                  <li name="b98d" id="b98d" className="graf graf--li graf-after--li graf--trailing"><a href="https://medium.com/u/799c7c7840a" data-href="https://medium.com/u/799c7c7840a" data-anchor-type="2" data-user-id="799c7c7840a"
                      data-action-value="799c7c7840a" data-action="show-user-card" data-action-type="hover" className="markup--user markup--li-user" target="_blank" rel="noopener noreferrer">Nathan Curtis</a> says that <a
                      href="https://medium.com/eightshapes-llc/a-design-system-isn-t-a-project-it-s-a-product-serving-products-74dcfffef935"
                      data-href="https://medium.com/eightshapes-llc/a-design-system-isn-t-a-project-it-s-a-product-serving-products-74dcfffef935" className="markup--anchor markup--li-anchor" rel="noopener noreferrer" target="_blank">A design system isn’t a project. It’s a product,
                      serving products.</a></li>
                </ol>
            </div>
          </div>
        </section>
      </section>
      <footer>
        <p>Exported from <a href="https://medium.com">Medium</a> on May 2, 2020.</p>
      </footer>
    </article>
  </div>
);

export default ModeMediumPost;
