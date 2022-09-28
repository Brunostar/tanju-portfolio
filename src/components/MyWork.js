import WorkItem from "./WorkItem"
import data from "../Data"
export default function MyWork() {
    const workCards = data.map(item => {
        return <a href={item["source-code"]} class="portfolio__item">
                <WorkItem 
                    key={item.id}
                    title={item.title}
                    tools={item.tools}
                    image={item.image}
                /></a>
    })
  return (
    <section class="my-work" id="work">
      <h2 class="section__title section__title--work">My work</h2>
      <p class="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div class="portfolio">
        {workCards}
      </div>
    </section>
  );
}
