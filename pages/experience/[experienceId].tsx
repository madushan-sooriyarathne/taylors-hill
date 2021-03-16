import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";

import { getMultipleEntries, serializeAssetUrls } from "../../utils/contentful";

import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import ExperiencePage from "../../components/layout/experiences/experience-page/ExperiencePage";
import { addToSiteMap } from "../../utils/sitemapOps";

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
  // fetch experiences from contentful;
  const excursions: ContentfulExcursionFields[] = await getMultipleEntries<ContentfulExcursionFields>(
    "excursion"
  );

  const activities: ContentfulExcursionFields[] = await getMultipleEntries<ContentfulExcursionFields>(
    "activity"
  );

  // combine fetched data and serialize data
  const experiences: Excursion[] = [...excursions, ...activities].map((item) =>
    serializeAssetUrls<ContentfulExcursionFields, Excursion>(
      item,
      "image",
      "images"
    )
  );

  // split data
  const primaryExperience = experiences.filter(
    (item) => item.id === (params as ParsedUrlQuery).experienceId
  )[0];
  const otherExperiences = experiences.filter(
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
  // fetch experiences from contentful;
  const excursions: ContentfulExcursionFields[] = await getMultipleEntries<ContentfulExcursionFields>(
    "excursion"
  );

  const activities: ContentfulExcursionFields[] = await getMultipleEntries<ContentfulExcursionFields>(
    "activity"
  );

  const experiences: ContentfulExcursionFields[] = [
    ...excursions,
    ...activities,
  ];

  const paths = experiences.map((item) => ({
    params: {
      experienceId: item.id,
    },
  }));

  // add urls to sitemap.xml
  addToSiteMap(
    experiences.map((item) => `https://taylorshill.lk/experience/${item.id}`)
  );

  return {
    paths,
    fallback: false,
  };
};

export { getStaticPaths, getStaticProps };
export default IndividualExperience;
