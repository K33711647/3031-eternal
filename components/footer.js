import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={`absolute bottom-0 w-full`}>
      <div className="grid w-full grid-cols-1 p-10 md:grid-cols-2 md:p-16">
        <div className="">
          <p className="text-white">
            324 Grand St
            <br />
            Storefront A<br />
            New York, NY 10002
          </p>
        </div>
        <div className="text-right"></div>
      </div>
    </footer>
  );
}
