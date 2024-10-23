"use client";

import { useEffect } from "react";

export default function InstallBootsrap() {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <></>;
}
