import globIcon from '/icons/glob.png'
import calenderIcon from '/icons/calenderIcon.png'
import restaurantIcon from '/icons/restaurantIcon.png'

import Card4 from '../../../utils/Cards/card4/Card4'

import css from './WhyShouldYouPWZ.module.css';

let WhyShouldYouPWZ = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Why should you partner with LocalEats?</div>
            <div className={css.tagLine}>Local Eats enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</div>
            <div className={css.cards}>
                <Card4 imgSrc={globIcon} title="100+ shops" tagLine="in Prayagraj" />
                <Card4 imgSrc={calenderIcon} title="10000+" tagLine="Trusted Peoples" />
                <Card4 imgSrc={restaurantIcon} title="4 lakhs+" tagLine="monthly orders" />
            </div>
        </div>
    </div>
}

export default WhyShouldYouPWZ;