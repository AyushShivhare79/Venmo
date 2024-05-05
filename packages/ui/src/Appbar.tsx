import { Button } from "./button";

interface AppbarProp {
  user: any;
  onSignout: any;
  onSignin: any;
}
export const Appbar = ({ user, onSignout, onSignin }: AppbarProp) => {
  return (
    <>
      <div>
        <div>PayTm</div>
        {user}
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </>
  );
};
