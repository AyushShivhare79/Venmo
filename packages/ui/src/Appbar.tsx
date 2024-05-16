import { Button } from "./button";

interface AppbarProp {
  user: any;
  onSignout: any;
  onSignin: any;
}
export const Appbar = ({ user, onSignout, onSignin }: AppbarProp) => {
  return (
    <>
      {/* <div className="flex border justify-between px-10 pt-1 items-center pb-1">
        <div className=" text-lg">Venmo</div>
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div> */}
    </>
  );
};
