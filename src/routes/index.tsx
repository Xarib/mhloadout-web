import { getSession } from "@auth/solid-start";
import { Suspense, type VoidComponent } from "solid-js";
import { createServerData$ } from "solid-start/server";
import { authOpts } from "./api/auth/[...solidauth]";
import { signOut, signIn } from "@auth/solid-start/client";
import { AnchorButton } from "~/components/button/AnchorButton";

const Home: VoidComponent = () => {
  return (
    <main>
      <h1>Index</h1>
      <AnchorButton href="/testgrounds">Testgrounds</AnchorButton>
      <Suspense>
        <AuthShowcase />
      </Suspense>
    </main>
  );
};

export default Home;

const AuthShowcase: VoidComponent = () => {
  const sessionData = createSession();
  return (
    <div class="flex flex-col items-center justify-center gap-4">
      <p class="text-center text-2xl text-white">
        {sessionData() && <span>Logged in as {sessionData()?.user?.name}</span>}
      </p>
      <button
        class="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={
          sessionData() ? () => void signOut() : () => void signIn("discord")
        }
      >
        {sessionData() ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

const createSession = () => {
  return createServerData$(async (_, event) => {
    return await getSession(event.request, authOpts);
  });
};
