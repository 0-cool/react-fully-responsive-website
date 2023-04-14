import React from 'react';
import styles from '../style';
import { clients } from '../constans';

export default function Clients() {
  return (
    <section id="clients" className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="Client" 
            className='sm:w-[192px] w-[100px] object-contain'/>
          </div>
        ))}
      </div>
    </section>
  )
}
