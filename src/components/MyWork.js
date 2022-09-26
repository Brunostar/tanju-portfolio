import WorkItem from "./WorkItem"
export default function MyWork() {
  return (
    <section class="my-work" id="work">
      <h2 class="section__title section__title--work">My work</h2>
      <p class="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div class="portfolio">
        {/* <!-- Portfolio item 01 --> */}
        <a href="portfolio-item.html" class="portfolio__item">
          {/* <img src="img/portfolio-01.jpg" alt="" class="portfolio__img" /> */}
          <WorkItem />
        </a>

        {/* <!-- Portfolio item 02 --> */}
        <a href="portfolio-item.html" class="portfolio__item">
          {/* <img src="img/portfolio-02.jpg" alt="" class="portfolio__img" /> */}
          <WorkItem />
        </a>

        {/* <!-- Portfolio item 03 --> */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img src="img/portfolio-03.jpg" alt="" class="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 04 --> */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img src="img/portfolio-04.jpg" alt="" class="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 05 --> */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img src="img/portfolio-05.jpg" alt="" class="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 06 --> */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img src="img/portfolio-06.jpg" alt="" class="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 07 --> */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img src="img/portfolio-07.jpg" alt="" class="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 08 --> */}
        <a href="#" class="portfolio__item">
          <img src="img/portfolio-08.jpg" alt="" class="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 09 --> */}
        <a href="#" class="portfolio__item">
          <img src="img/portfolio-09.jpg" alt="" class="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 0 0--> */}
        <a href="#" class="portfolio__item">
          <img src="img/portfolio-10.jpg" alt="" class="portfolio__img" />
        </a>
      </div>
    </section>
  );
}
