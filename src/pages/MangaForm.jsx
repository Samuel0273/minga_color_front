import NavBar from "../components/NavBar";
import MangaForm from "../components/MangaForm";

export default function MangaFormContainer() {
  return (
    <div className=" flex flex-col min-h-screen w-full justify-between items-center bg-[#EBEBEB] m-auto md:px-8">
      <NavBar />
      <MangaForm />
    </div>
  );
}
