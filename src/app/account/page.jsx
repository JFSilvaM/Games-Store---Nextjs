import UserInfo from "@/components/account/user-info/user-info";
import BasicLayout from "@/components/basic-layout";

const Account = () => {
  return (
    <>
      <BasicLayout isContainer relative>
        <UserInfo />
      </BasicLayout>
    </>
  );
};

export default Account;
