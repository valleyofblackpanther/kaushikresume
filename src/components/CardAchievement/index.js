import './index.css'

const CardAchievement = (props) => {
    const { each } = props
    return (
        <div class={`achievement-card ${each.backgroundColor}`} >
            <div class="card__icon"><i class="fas fa-bolt"></i></div>
            {/* <p class="card__exit"><i class="fas fa-times"></i></p> */}
            <div>
                <h2 class="card__title">{each.heading}</h2>
                <p class="card__title">{each.description}</p>
            </div>
        </div >
    )
}

export default CardAchievement