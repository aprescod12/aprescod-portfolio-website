import Container from "@/components/Container";

export default function HomePage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">
        Hi, I’m Your Name
      </h1>

      <p className="mt-4 max-w-xl text-neutral-700">
        I’m an international student-athlete from Trinidad and Tobago,
        interested in medical device development and how AI can be applied
        to improve healthcare technology.
      </p>
    </Container>
  );
}
