export default function WorkItem(props) {
    const techTools = props.tools.map(tool =>
        <span>{tool}</span>
    )
    return (
        <div class="work-item">
            {/* <div class="work-item__image" style={styles}> */}
                <img src={props.image} alt="" class="work-item__image"/>
            {/* </div> */}
            <div class="work-item__text">
                <h3 class="work-item__title">{props.title}</h3>
                <p class="work-item__tools">{techTools}</p>
            </div>
        </div>
    )
}