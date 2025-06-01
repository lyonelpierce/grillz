import { SignUp } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/_layout/sign-up/$")({
  component: Page,
});

function Page() {
  return <SignUp />;
}
