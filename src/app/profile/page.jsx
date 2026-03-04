"use client";

import BasicLayout from "@/components/basic-layout";
import Tabs from "@/components/profile/tabs/tabs";
import UserInfo from "@/components/profile/user-info";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  return (
    user && (
      <>
        <BasicLayout isContainer relative>
          <UserInfo />

          <Tabs />
        </BasicLayout>
      </>
    )
  );
};

export default ProfilePage;
