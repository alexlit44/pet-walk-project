import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './signout.module.css';
import Store from './../../../context';
import defaultUser from './../../../assets/img/defaultUser.png';
import arrow from './../../../assets/img/icon_arrow.png';

function Signout() {
  const data = useContext(Store);
  const history = useHistory();
  let name = data.user[0].name[0].toUpperCase();
  
  const exit = () => {
    data.removeCookie('login');
    history.push('/');
  }

  return (
      <section className={styles.signout}>
        <button className={styles.goBack} onClick={() => history.goBack()}><img src={arrow} alt="arrow"/></button>
        
        <h3>Profil</h3>

        <div className={styles.container}>
          {data.user[0].img ? <img src={data.user[0].img} onError={event => event.target.src = defaultUser} alt='person' /> 
            : <div className={styles.profilImg}><p>{name}</p></div>}
          <h4>{data.user[0].name}</h4>
        </div>

        <button className={styles.btn} onClick={exit}>Signout</button>
        
      </section>
    );
}
  
export default Signout;