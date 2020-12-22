import Page from "../../components/layout/page/Page";

import { excursions } from "../../site-data";

const IndividualExperience = ({ primaryExperience, otherExperiences }) => {
  return <Page></Page>;
};

const getStaticProps = async ({ params }) => {
  const primaryExperience = excursions.filter(
    (item) => item.id === params.experienceId
  )[0];
  const otherExperiences = excursions.filter(
    (item) => item.id !== params.experienceId
  );

  return {
    props: {
      primaryExperience,
      otherExperiences,
    },
  };
};

const getStaticPaths = async () => {
  const paths = excursions.map((item) => ({
    params: {
      experienceId: item.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export { getStaticPaths, getStaticProps };
export default IndividualExperience;
