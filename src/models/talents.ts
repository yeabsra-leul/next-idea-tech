export interface StackData {
  id: number;
  skill: string;
  experience: number;
  icon: string;
}

export interface SimpleStackData {
  id: number;
  skill: string;
}

export interface TalentLocation {
  city: string;
  country: string;
}

export interface ExperienceData {
  id: number;
  title: string;
  company: string;
  startDate: Date;
  endDate: Date;
  responsibilities: string;
  stacks: SimpleStackData[];
}

export interface AcademicBackground {
  id: number;
  institution: string;
  program: string;
  startDate: Date;
  endDate: Date;
  major: string;
}

export interface TalentData {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  location: TalentLocation;
  overall_experience: string;
  description: string;
  nitTeamNotes: string;
  stacks: StackData[];
  experience: ExperienceData[];
  academicBackgrounds: AcademicBackground[];
  otherSkills: string;
  hobbies: string;
  videoAskUrl: string;
  profileImage: string;
  approved:boolean;
}
