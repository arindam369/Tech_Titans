import { useContext } from 'react'
import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import AuthContext from '@/store/AuthContext'
// import RewardImg from '../../public/assets/reward.png'
// import Img1 from '../assets/rewards/a.webp'
// import Img2 from '../assets/rewards/b.webp'
// import Img3 from '../assets/rewards/c.webp'
// import Img4 from '../assets/rewards/d.webp'
// import Img5 from '../assets/rewards/e.webp'
// Modal.setAppElement('#root') // this is important for accessibility

const RewardCard = ({ img, name, coins, onClick }) => {
    return (
        <div
            className="h-max w-max single-reward"
            onClick={() => {
                onClick()
            }}
        >
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
    const [selectedReward, setSelectedReward] = useState(null)
    const rewards = [
        { img: '/assets/rewards/a.webp', name: 'Brush', coins: 200 },
        { img: '/assets/rewards/b.webp', name: 'Cutlery Items', coins: 300 },
        { img: '/assets/rewards/c.webp', name: 'Holder', coins: 100 },
        { img: '/assets/rewards/d.webp', name: 'Razor', coins: 50 },
        { img: '/assets/rewards/e.webp', name: 'Comb', coins: 400 },
    ]

    const openModal = reward => {
        setSelectedReward(reward)
    }

    const closeModal = () => {
        setSelectedReward(null)
    }

    return (
        <>
            <Modal
                isOpen={selectedReward !== null}
                onRequestClose={closeModal}
                className="modal-size"
            >
                <h2>{selectedReward?.name}</h2>
                <img src={selectedReward?.img} alt={selectedReward?.name} className='modalImage'/>
                <p>Coins: {selectedReward?.coins}</p>
                <button className="btn-success">Order</button>
                <button className="btn-danger" onClick={closeModal}>
                    Cancel
                </button>
            </Modal>
            <div className={styles.profileContainer2}>
                <div className="flex-justtify rewards-header">
                    <h3>Rewards and Prizes</h3>
                    <h3>Dummy Text</h3>
                </div>
                <div className="grid-container">
                    {rewards.map((reward, index) => (
                        <RewardCard
                            key={index}
                            img={reward.img}
                            name={reward.name}
                            coins={reward.coins}
                            onClick={() => openModal(reward)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
