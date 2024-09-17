import { useEffect, useState } from "react";
import { useRouteError, useLocation } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const ErrorBoundary = () => {
  const error = useRouteError();
  const location = useLocation();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const checkNotFound = async () => {
      try {
        const response = await fetch(location.pathname);
        const isNotFound = response.headers.get("X-Not-Found") === "true";
        if (isNotFound) {
          setNotFound(true);
          document.title = "404 - Страница не найдена";
          const meta = document.createElement("meta");
          meta.name = "robots";
          meta.content = "noindex,nofollow";
          document.head.appendChild(meta);
        }
      } catch (error) {
        console.error("Error checking not found status:", error);
      }
    };

    checkNotFound();
  }, [location]);

  if (notFound || error?.status === 404) {
    return <ErrorPage />;
  }

  if (error) {
    throw error;
  }

  return null;
};

export default ErrorBoundary;
