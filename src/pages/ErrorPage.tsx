import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { useScreen } from "../hooks/useScreen";
import { Link } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Button from "../components/ui/Button";

export default function ErrorPage() {
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) return <UnknownError />;
  if (error instanceof Error) return <InstanceError error={error} />;
  if (error.status == 404) return <NotFoundError />;
}

function UnknownError() {
  const { isDesktop } = useScreen();

  return (
    <>
      <Navbar />
      <main className={`container mx-auto ${isDesktop ? "px-32" : "px-4"}`}>
        An unknown error occurred
      </main>
    </>
  );
}

function InstanceError({ error }: { error: Error }) {
  const { isDesktop } = useScreen();

  return (
    <>
      <Navbar />
      <main className={`container mx-auto ${isDesktop ? "px-32" : "px-4"}`}>
        {error.message}
      </main>
    </>
  );
}

function NotFoundError() {
  const { isDesktop } = useScreen();

  return (
    <>
      <Navbar />
      <main className={`container mx-auto ${isDesktop ? "px-32" : "px-4"}`}>
        <div className="h-[80vh] flex justify-center items-center text-center">
          <section>
            <h1 className="text-[10rem] font-bold">
              4<span className="text-gradient">0</span>4
            </h1>
            <p className="text-4xl font-semibold">
              Sorry, there's <span className="text-gradient">nothing here</span>
            </p>
            <br />
            <br />
            <Link to={"/"}>
              <Button
                variant="MAIN"
                text="GO BIG OR GO HOME"
                className="py-3"
              />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
