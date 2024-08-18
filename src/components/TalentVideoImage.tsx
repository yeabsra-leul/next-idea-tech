"use client";

import Image from "next/image";
import { Tabs } from "@mantine/core";
import { RiVideoLine } from "react-icons/ri";
import { LuUserCircle } from "react-icons/lu";
import { TalentData } from "@/models/talents";

type TalentCardProps = {
  talent: TalentData;
  orientation: "vertical" | "horizontal";
};

const TalentVideoImage = ({ talent, orientation }: TalentCardProps) => {
  return (
    <Tabs
      defaultValue={talent.videoAskUrl ? "video" : "photo"}
      orientation={orientation}
    >
      <Tabs.List grow>
        {!!talent.videoAskUrl && (
          <Tabs.Tab value="video">
            <RiVideoLine className="h-6 w-6 sm:h-7 sm:w-7" />
          </Tabs.Tab>
        )}
        <Tabs.Tab value="photo">
          <LuUserCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </Tabs.Tab>
      </Tabs.List>

      {!!talent.videoAskUrl && (
        <Tabs.Panel value="video" className="lg:pl-4 pt-4 lg:pt-0">
          <div className="flex lg:h-44 lg:w-44 items-center">
            <video controls className="w-full h-full" width="520" height="420">
              <source src={talent.videoAskUrl ?? ""} type="video/mp4" />
              <track />
              Your browser does not support the video tag.
            </video>
          </div>
        </Tabs.Panel>
      )}
      <Tabs.Panel
        value="photo"
        className="lg:pl-4 pt-4 lg:pt-0 md:flex md:justify-center"
      >
        <Image
          src={talent.profileImage ?? "/images/talent/default.png"}
          alt={talent.fullName}
          width={0}
          height={0}
          sizes="100vw"
          className="block h-80 w-80 md:h-148 md:w-148 lg:h-44 lg:w-44 self-center rounded-lg"
        />
      </Tabs.Panel>
    </Tabs>
  );
};

export default TalentVideoImage;
