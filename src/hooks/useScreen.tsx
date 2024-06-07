import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export function useScreen() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [isTablet, setIsTablet] = React.useState<boolean>(false);
  const [isDesktop, setIsDesktop] = React.useState<boolean>(false);

  React.useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < MOBILE_BREAKPOINT);
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT);
      setIsDesktop(width >= TABLET_BREAKPOINT);
    };

    // Initial check
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
}
