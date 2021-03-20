import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import ExperiencesGroup from "../../components/layout/experiences/experiences-group/ExperiencesGroup";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { getMultipleEntries, serializeAssetUrls } from "../../utils/contentful";

interface Props {
  excursions: Excursion[];
  activities: Excursion[];
}

const Experience: React.FC<Props> = ({
  excursions,
  activities,
}: Props): JSX.Element => {
  return (
    <Page title="Experiences">
      <CoverImage
        image="/static/img/experience-cover.webp"
        title="Experience"
        subTitle="Things that keep you occupied while your stay"
      />
      <ExperiencesGroup
        experiences={activities}
        mainHeading="Activities"
        subHeading="Take time to relax, There’s enough activities to keep within the Taylors Hill premises"
      />

      <ExperiencesGroup
        experiences={excursions}
        mainHeading="Excursions"
        subHeading="A stay would not be completed without having explored the various attractions that are within short distance of Taylors Hill."
      />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  // Fetch excursions from contentful and serialize it
  const excursions: Excursion[] = await getMultipleEntries<ContentfulExcursionFields>(
    "excursion"
  ).then((result: ContentfulExcursionFields[]) =>
    result.map((item: ContentfulExcursionFields) =>
      serializeAssetUrls<ContentfulExcursionFields, Excursion>(
        item,
        "image",
        "images"
      )
    )
  );

  // Fetch activities from contentful and serialize it
  const activities: Excursion[] = await getMultipleEntries<ContentfulExcursionFields>(
    "activity"
  ).then((result: ContentfulExcursionFields[]) =>
    result.map((item: ContentfulExcursionFields) =>
      serializeAssetUrls<ContentfulExcursionFields, Excursion>(
        item,
        "image",
        "images"
      )
    )
  );

  return {
    props: {
      excursions,
      activities,
    },
  };
};

export { getStaticProps };
export default Experience;
