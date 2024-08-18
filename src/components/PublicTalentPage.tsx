import { unstable_noStore as noStore } from "next/cache";
import TalentVideoImage from "@/components/TalentVideoImage";
import { GoLocation as LocationIcon } from "react-icons/go";
import { talentData } from "@/lib/data";
import Empty from "@/components/ui/Empty";
import { formatdDate } from "@/lib/utils";
import Image from "next/image";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-10">
    <h3 className="pb-3 text-base md:text-xl font-bold text-main">{title}</h3>
    {children}
  </div>
);

type PublicTalentPageProps = {
  params: { publicId: string };
};

const PublicTalentPage = async ({ params }: PublicTalentPageProps) => {
  noStore();

  if (!talentData) {
    return <Empty message="Talent not found" />;
  }

  return (
    <div className="sm:container">
      <div className="relative rounded-sm md:rounded-md lg:rounded-lg md:border md:border-edge bg-white text-body">
        {/* header */}
        <div className="flex flex-col lg:flex-row gap-6 border-b border-edge px-4 md:px-14 py-6 md:py-16">
          <div className="hidden lg:block">
            <TalentVideoImage talent={talentData} orientation="vertical" />
          </div>
          <div className="block lg:hidden">
            <TalentVideoImage talent={talentData} orientation="horizontal" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">
              {talentData.fullName ||
                talentData.firstName + " " + talentData.lastName}
            </h2>
            <div className="mt-2 flex flex-col sm:flex-row sm:justify-between sm:gap-4">
              <h3 className="font-medium text-primary">{talentData.title}</h3>
              <div>
                {talentData.location?.city && (
                  <div className="flex items-center gap-2 text-sm opacity-75 sm:opacity-100">
                    <LocationIcon width={24} height={24} />{" "}
                    {talentData.location?.city}, {talentData.location?.country}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 md:mt-2 flex justify-between">
              {talentData.overall_experience && (
                <h3 className="font-medium">
                  {talentData.overall_experience} Years Experience
                </h3>
              )}
            </div>

            <p
              className="mt-5 font-inter text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: talentData.description }}
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex gap-6 px-4 md:px-14 py-4 lg:py-10">
          <div className="w-full sm:pb-20">
            {talentData.nitTeamNotes && (
              <div className="mb-8">
                <h3 className="mb-2 font-semibold text-main">
                  NIT Talent Team Notes
                </h3>
                <p className="text-xs md:text-sm leading-relaxed">
                  {talentData.nitTeamNotes}
                </p>
              </div>
            )}

            <Section title="Core technologies">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {talentData.stacks?.map((item) => (
                  <div
                    className="flex items-center gap-4 rounded-md border border-b-[3px] border-r-[3px] border-primary px-3 py-2"
                    key={item.id}
                  >
                    <Image
                      src={item.icon}
                      alt={item.skill}
                      width={25}
                      height={25}
                    />
                    <div>
                      <div className="font-semibold text-main text-sm sm:text-base">
                        {item.skill}
                      </div>
                      <div className="text-xs sm:text-sm">
                        {item.experience}+ years
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Projects highlights">
              <div className="flex flex-col gap-10 ">
                {talentData.experience?.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex w-6 flex-col items-center">
                      <div className="flex h-10 items-center">
                        <div className="h-[22px] w-[22px] rounded-full border border-primary/50 p-1.5 text-xl">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                      </div>

                      <div className="mt-6 h-full w-0 border-l border-dashed border-main/30"></div>
                    </div>
                    <div className="border-b-[1px] border-main/10 pb-6 sm:pb-5">
                      <div className="flex flex-col sm:flex-row sm:h-9 sm:items-center gap-1 sm:gap-2 leading-none">
                        <span className="text-base sm:text-xl font-medium text-main">
                          {item.title}
                        </span>
                        <span className="hidden sm:block text-3xl leading-none">
                          {" "}
                          •{" "}
                        </span>
                        <span className="text-xs sm:text-base">
                          {item.company}
                        </span>
                      </div>
                      <div className="space-x-2 sm:space-x-4 pt-1 sm:pt-5 text-xs opacity-75">
                        <span className="whitespace-pre uppercase">
                          {formatdDate(item.startDate)}
                        </span>
                        <span>-</span>
                        <span className="whitespace-pre uppercase">
                          {item.endDate && item.endDate
                            ? formatdDate(item.endDate)
                            : "Present"}
                        </span>
                      </div>
                      <div
                        className="pt-4 text-xs sm:text-base"
                        dangerouslySetInnerHTML={{
                          __html: item.responsibilities,
                        }}
                      />
                      <div className="pt-3">
                        <span className="flex flex-col sm:flex-row gap-2">
                          <span className="hidden sm:block text-sm font-semibold text-main">
                            Technologies :
                          </span>
                          <div className="inline-flex flex-wrap items-center gap-2">
                            {item.stacks.map((stack, index) => (
                              <span
                                className="rounded-full bg-main/20 px-2 py-0.5 text-center text-xs"
                                key={index}
                              >
                                {stack.skill}
                              </span>
                            ))}
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Education">
              <div className="flex flex-col gap-10 ">
                {talentData.academicBackgrounds?.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex w-6 flex-col items-center">
                      <div className="flex h-10 items-center">
                        <div className="h-[22px] w-[22px] rounded-full border border-primary/50 p-1.5 text-xl">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                      </div>

                      <div className="mt-6 h-full w-0 border-l border-dashed border-main/30"></div>
                    </div>
                    <div className="border-b-[1px] border-main/10 pb-5">
                      <div className="flex flex-col sm:flex-row sm:h-9 sm:items-center gap-1 sm:gap-2 leading-none">
                        <span className="text-base sm:text-xl font-medium text-main">
                          {item.institution}
                        </span>
                        <span className="hidden sm:block text-3xl leading-none">
                          {" "}
                          •{" "}
                        </span>
                        <span className="text-xs sm:text-base">
                          {item.program}
                        </span>
                      </div>
                      <div className="space-x-2 sm:space-x-4 pt-1 sm:pt-5 text-xs opacity-75">
                        <span className="whitespace-pre uppercase">
                          {formatdDate(item.startDate)}
                        </span>
                        <span>-</span>
                        <span className="whitespace-pre uppercase">
                          {item.endDate && item.endDate
                            ? formatdDate(item.endDate)
                            : "Present"}
                        </span>
                      </div>
                      <div
                        className="pt-4 text-sm sm:text-base"
                        dangerouslySetInnerHTML={{ __html: item.major }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Additional skills and hobbies">
              <div className="mb-4 sm:mb-8 pl-4 sm:pl-8">
                <h4 className="sm:py-2 font-semibold text-main text-sm sm:text-base">
                  Additional skills
                </h4>
                <p className="text-xs sm:text-base">{talentData.otherSkills}</p>
              </div>
              <div className="mb-4 sm:mb-8 pl-4 sm:pl-8">
                <h4 className="sm:py-2 font-semibold text-main text-sm sm:text-base">
                  Hobbies
                </h4>
                <p className="text-xs sm:text-base">{talentData.hobbies}</p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublicTalentPage;
