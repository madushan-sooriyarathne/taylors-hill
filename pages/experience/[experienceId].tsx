import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";

import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import ExperiencePage from "../../components/layout/experiences/experience-page/ExperiencePage";

import { excursions } from "../../site-data";

interface Props {
  primaryExperience: Excursion;
  otherExperiences: Excursion[];
}

const IndividualExperience: React.FC<Props> = ({
  primaryExperience,
  otherExperiences,
}: Props): JSX.Element => {
  return (
    <Page>
      <CoverImage
        image={primaryExperience.image}
        title={primaryExperience.title}
      />
      <ExperiencePage
        primaryExperience={primaryExperience}
        otherExperiences={otherExperiences}
      />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
  const primaryExperience = excursions.filter(
    (item) => item.id === (params as ParsedUrlQuery).experienceId
  )[0];
  const otherExperiences = excursions.filter(
    (item) => item.id !== (params as ParsedUrlQuery).experienceId
  );

  return {
    props: {
      primaryExperience,
      otherExperiences,
    },
  };
};

const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<{ experienceId: string }>
> => {
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
