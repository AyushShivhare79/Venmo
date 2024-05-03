import { Button } from "./button";

interface AppbarProp {
  user: {
    name: string | "";
  };
  onSignout: any;
  onSignin: any;
}
export const Appbar = ({ user, onSignout, onSignin }: AppbarProp) => {
  return (
    <>
      <div>
        <div>PayTm</div>
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </>
  );
};
