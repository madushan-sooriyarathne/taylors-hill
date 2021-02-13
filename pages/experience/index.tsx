import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import { excursions } from "../../site-data";
import ExperiencesGroup from "../../components/layout/experiences/experiences-group/ExperiencesGroup";
import { GetStaticProps, GetStaticPropsResult } from "next";

interface Props {
  experiences: Excursion[];
}

const Experience: React.FC<Props> = ({ experiences }: Props): JSX.Element => {
  return (
    <Page>
      <CoverImage
        image="/static/img/experience-cover.webp"
        title="Experience"
        subTitle="Things that keep you occupied while your stay"
      />
      <ExperiencesGroup
        experiences={experiences}
        mainHeading="Activities"
        subHeading="Take time to relax, There’s enough activities to keep within the Taylors Hill premises"
      />

      <ExperiencesGroup
        experiences={experiences}
        mainHeading="Excursions"
        subHeading="A stay would not be completed without having explored the various attractions that are within short distance of Taylors Hill."
      />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      experiences: excursions,
    },
  };
};

export { getStaticProps };
export default Experience;
