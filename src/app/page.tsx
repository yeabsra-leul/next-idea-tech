import NavBar from "@/components/NavBar";
import PublicTalentPage from "@/components/PublicTalentPage";

export default function Home() {
  const param: any = {
    publicId: "tcsfj5",
  };
  return (
    <main className="bg-main-background flex flex-col md:gap-12">
      <NavBar/>
      <PublicTalentPage params={param} />
    </main>
  );
}
