import React from 'react'
import styles from '@/styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'


const NavBar = () => {
  return (
    <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src='/img/telephone.png' alt =""
                        width={32}
                        height={32}
                    />
                </div>
                <div className = {styles.texts}>
                    <div className = {styles.text}>ORDER NOW</div>
                    <div className = {styles.text}>679678620</div>
                </div>
            </div>
            <div className={styles.item}>
              <ul className ={styles.list}>

                <Link href= '/' className={styles.listItem}>Homepage</Link>
                <Link href='/Products/3' className={styles.listItem}>Product</Link>
                <li className={styles.listItem}>Menu</li>
                <Image src='/img/logo.png' alt="" width={160} height={96}/>
                <li className={styles.listItem}>Event</li>
                <li className={styles.listItem}>Blog</li>
                <li className={styles.listItem}>Contact</li>

              </ul>
            </div>
            <div className={styles.item}>
              <Link href='/Carts' className={styles.cart}>
                <Image src='/img/cart.png' alt="" width={30} height={30}/>
                <div className={styles.counter}>2</div>
              </Link>

            </div>



    </div>
  )
}

export default NavBar