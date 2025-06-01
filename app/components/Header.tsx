import { SignInButton } from "@clerk/tanstack-react-start";
import { Button } from "./ui/button";
import { ShoppingCartIcon, User2Icon } from "lucide-react";

const Header = () => {
  return (
    <div className="max-w-7xl h-14 fixed top-0 left-0 right-0 mx-auto w-full flex items-center justify-between">
      Holy Grillz
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <ShoppingCartIcon />
        </Button>
        <SignInButton>
          <Button variant="ghost" size="icon">
            <User2Icon />
          </Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Header;
