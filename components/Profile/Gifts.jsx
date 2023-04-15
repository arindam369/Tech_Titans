import { useContext } from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import AuthContext from '@/store/AuthContext'
// import RewardImg from '../../public/assets/reward.png'
// import Img1 from '../assets/rewards/a.webp'
// import Img2 from '../assets/rewards/b.webp'
// import Img3 from '../assets/rewards/c.webp'
// import Img4 from '../assets/rewards/d.webp'
// import Img5 from '../assets/rewards/e.webp'

const RewardCard = ({ img, name, coins }) => {
    return (
        <div className="h-max w-max single-reward">
            <div className="reward-container">
                <Image
                    className="image-container"
                    src={img}
                    height={500}
                    width={500}
                    alt="image"
                />
                <div className="flex-justtify">
                    <h2>{name}</h2>
                    <h2>{coins}</h2>
                </div>
            </div>
        </div>
    )
}

export default function Gifts() {
    const authCtx = useContext(AuthContext)

    return (
        <>
            <div className={styles.profileContainer}>
                <div className="flex-justtify rewards-header">
                    <h3>Rewards and Prizes</h3>
                    <h3>Dummy Text</h3>
                </div>
                <div className="grid-container">
                    <RewardCard
                        img={'/assets/rewards/a.webp'}
                        name={'T-shirt'}
                        coins={200}
                    />
                    <RewardCard
                        img={'/assets/rewards/b.webp'}
                        name={'T-shirt'}
                        coins={200}
                    />
                    <RewardCard
                        img={'/assets/rewards/c.webp'}
                        name={'T-shirt'}
                        coins={200}
                    />
                    <RewardCard
                        img={'/assets/rewards/d.webp'}
                        name={'T-shirt'}
                        coins={200}
                    />
                    <RewardCard
                        img={'/assets/rewards/e.webp'}
                        name={'T-shirt'}
                        coins={200}
                    />
                    {/* <RewardCard img={Img2} name={'T-shirt'} coins={200} />
                    <RewardCard img={Img3} name={'T-shirt'} coins={200} />
                    <RewardCard img={Img4} name={'T-shirt'} coins={200} />
                    <RewardCard img={Img5} name={'T-shirt'} coins={200} /> */}
                </div>
            </div>
        </>
    )
}
