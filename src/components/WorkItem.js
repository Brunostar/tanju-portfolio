export default function WorkItem(props) {
    const techTools = props.tools.map(tool =>
        <span>{tool}</span>
    )
    console.log(props.image)
    const image = 'img/portfolio-tenzies.png'
    return (
        <div class="work-item">
            <img src={(require(`../../src/${props.image}`))} alt="image" class="work-item__image"/>
            <div class="work-item__text">
                <h3 class="work-item__title">{props.title}</h3>
                <p class="work-item__tools">{techTools}</p>
            </div>
        </div>
    )
}