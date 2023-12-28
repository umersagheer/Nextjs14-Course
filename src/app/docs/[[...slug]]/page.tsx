import Button from "@/components/Button";
import Link from "next/link";

export default function Doc({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <>
        <h1>
          Viewing docs for feature <Button text={`${params.slug[0]}`} /> and
          concept
          <Button text={`${params.slug[1]}`} />
        </h1>
        <Link href={"/"}>
          <Button text="Take me Home" />
        </Link>
      </>
    );
  } else if (params.slug?.length === 1) {
    return (
      <>
        <h1>Viewing docs for feature {params.slug[0]}</h1>
        <Link href={"/"}>
          <Button text="Take me Home" />
        </Link>
      </>
    );
  }
  return <h1>Docs home page</h1>;
}
