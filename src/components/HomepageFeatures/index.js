import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    url: "/docs/homework",
    title: 'Homework List',
    Svg: require('@site/static/img/list.svg').default,
    description: (
      <>
        View the homework list for today.
      </>
    ),
  },
  {
    url: "/docs/info",
    title: '2B Info',
    Svg: require('@site/static/img/2B.svg').default,
    description: (
      <>
        View infomation for Class 2B.
      </>
    ),
  },
  {
    url: "/docs/downloads",
    title: 'Download Center',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Download useful files.
      </>
    ),
  },
];

const handleOnClick = (url) => {
  return () => {
      openLink(url);
  }
}

function openLink(url){
  window.location.href = url;
}

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" onClick={handleOnClick(url)}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
