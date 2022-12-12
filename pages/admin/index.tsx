import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  DashboardCard,
  TotalClassCompleted,
  UpcommingSessions,
} from "../../components";
import { AdminLayout, DashboardLayout } from "../../layouts";

type Props = {
  children: React.ReactNode;
};

const Admin = ({ children }: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") router.replace("/");
  }, [router, status]);

  if (status === "loading" || status === "unauthenticated")
    return (
      <div className="flex justify-center items-center section-container bg-slate-200">
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"></div>
      </div>
    );

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="pl-6">
          <div className="flex flex-col pt-5">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 p-4 pb-0">
                <h1 className="uppercase text-[#7D7C7C]/60 font-light text-xl">
                  number of students
                </h1>
                <h1 className="uppercase text-[#7D7C7C] font-black text-3xl">
                  2511
                </h1>
                <h1 className="uppercase text-[#7D7C7C]/60 font-light text-xl mt-1.5">
                  number of students
                </h1>
                <h1 className="uppercase text-primaryDark font-black text-3xl">
                  2511
                </h1>
              </div>

              <div className="col-span-4 p-4 pb-0">
                <h1 className="font-light text[#7D7D7D] mb-1.5">Background</h1>
                <p className="text-[#7D7D7D] font-semibold">Science</p>
              </div>

              <div className="col-span-4 p-4 pb-0">
                <h1 className="font-light text[#7D7D7D] mb-1.5">Background</h1>
                <p className="text-[#7D7D7D] font-semibold">Science</p>
              </div>
              <div className="col-span-6"></div>
            </div>

            <div className="grid grid-cols-12 space-x-4">
              <div className="col-span-8">
                <UpcommingSessions />
              </div>
              <div className="col-span-4">
                <TotalClassCompleted />
              </div>
              <div className="col-span-6"></div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Admin;