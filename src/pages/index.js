import { Fragment } from "react";
import CountdownTimer from "@/components/CountdownTimer";
export default function Home() {
  return (
    <Fragment>
      <CountdownTimer initialTime={360000} />
      <CountdownTimer initialTime={3600} />
      <CountdownTimer initialTime={300} />
      <CountdownTimer initialTime={30} />
    </Fragment>
  );
}
