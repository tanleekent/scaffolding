import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 bg-gray-700">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:justify-center text-white items-center p-8 md:py-12 md:px-20">
          <div className="w-full md:w-auto">
            <div className="relative">
              <h2 className="font-bold text-xl relative z-50 mr-5 pl-5">Scaffolding</h2>
              <Image
                className="absolute -top-2 -left-3 z-40"
                src="/img/logo.png"
                alt="777 Scaffolding logo"
                width={44}
                height={44}
              />
            </div>
          </div>
          <div className="md:border-l md:border-gray-500 text-sm md:pl-5 py-2 font-semibold flex flex-col md:flex-row gap-4">
            <div className="h-full flex sm:flex-row flex-col justify-start text-left">
              <div className="grow">
                <p className="mb-4">
                  Tel:{" "}
                  <a href="tel:+60182728777" className="hover:underline">
                    +60182728777
                  </a>
                </p>
                <p className="mb-4">
                  E-mail:{" "}
                  <a href="mailto:777scaffolding@gmail.com" className="hover:underline">
                    777scaffolding@gmail.com
                  </a>
                </p>
                <p>Address: 131, Kampung Baru Semenyih, 43500 Semenyih, Selangor Darul Ehsan</p>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <Image src="/img/certificate/cidb.png" alt="CIDB" width={48} height={48} className="h-12 w-12" />
              <Image src="/img/certificate/iso14001.png" alt="ISO 14001" width={48} height={48} className="h-12 w-12" />
              <Image src="/img/certificate/iso9001.png" alt="ISO 9001:2015" width={48} height={48} className="h-12 w-12" />
            </div>
          </div>
        </div>
        <div className="text-start md:text-center text-white py-3 px-8">
          <p className="my-3 text-gray-400 text-sm">777 SCAFFOLDING SDN. BHD. (1459413H / 202201013716) &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
