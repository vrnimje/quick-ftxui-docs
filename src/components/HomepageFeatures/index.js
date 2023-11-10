import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Quick-FTXUI is built on top of FTXUI, to make it easier to configure Terminal User
        Interfaces
      </>
    ),
  },
  {
    title: 'Using Quick-FTXUI',
    description: (
      <>
        Learn how to integrate Quick-FTXUI in your project, in <code>Docs->Guides</code>
      </>
    ),
  },
  {
    title: 'Use with Caution',
    description: (
      <>
        This project is still in development phase, checkout out our progress on GitHub
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
