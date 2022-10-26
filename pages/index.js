import { useRouter } from 'next/router';
import { useRef } from 'react'
import styles from '../styles/Home.module.css'

function index() {

  const router = useRouter();
  const inputRef = useRef(null);
  const onSearch = (e) => {
    e.preventDefault();
    const term = inputRef.current.value;
    router.push(`/search?term=${term}`)


  }


  return (
    <div className={styles.main}>
      <input ref={inputRef} className={styles.search} type="text" placeholder='search here' />
      <button onClick={onSearch}>Search</button>
    </div>
  )
}

export default index