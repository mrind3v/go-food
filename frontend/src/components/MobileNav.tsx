import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-gray-600" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to GoFood</span>
        </SheetTitle>
        <Separator>
          <SheetDescription className="flex"><Button className="flex-1 font-bold bg-gray-600">Log In</Button></SheetDescription>
        </Separator>
      </SheetContent>
    </Sheet>
  );
}
