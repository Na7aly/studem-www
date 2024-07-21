import React from 'react';
import styles from './SectionLinks.module.css';

const Sectionlinks = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>LINK-URI UTILE</h3>
            <ul className={styles.list}>
              <li><a href="/">Acasă</a></li>
              <li><a href="/despre-noi">Despre noi</a></li>
              <li><a href="/domenii">Domenii</a></li>
              <li><a href="/echipa">Echipa</a></li>
              <li><a href="/citate">Citate STUDEM</a></li>
              <li><a href="/transparenta">Transparență</a></li>
              <li><a href="/finantatori">Finanțatori</a></li>
              <li><a href="/parteneri">Parteneri</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>CONTACTE</h3>
            <ul className={styles.list}>
              <li>Strada Alexandr Pușkin 19, etajul 3</li>
              <li>Moldova</li>
              <li>Bălți</li>
              <li>Telefon: +373 (60) 229996 - Constantin Curca</li>
              <li>Telefon: +373 (79) 971786 - Ioan-Giuliano Ciomschi</li>
              <li>Email: <a href="mailto:youth.center@studem.md">youth.center@studem.md</a></li>
              <li>Email: <a href="mailto:studem.balti@gmail.com">studem.balti@gmail.com</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Despre noi</h3>
            <p>Centrul de Tineret STUDEM este o structură de auto guvernanță a tinerilor din municipiul Bălți înființată în cadrul unui parteneriat Moldo-Danez de lungă durată. Scopul de bază al Centrului este consolidarea democrației în Republica Moldova prin deprinderea cu principiile democratice în rândul tinerilor</p>
            <ul className={styles.socialIcons}>
              <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Sectionlinks;
