'use client'
import Image from 'next/image'
import styles from './Technologies.module.scss'
import { motion } from 'framer-motion'
// ico
export const Icons = ({ iconsList }) => {
  return (
    <>
      <motion.ul
        className={styles.iconList}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {iconsList.map((i) => (
          <li key={i.name}>
            <span className={styles.iconWrapper}>
              <Image src={i.icon} responsive alt='icon' />
              {i.name}
            </span>
          </li>
        ))}
      </motion.ul>
    </>
  )
}
