import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t py-8 text-sm text-neutral-600">
      <Container>
        © {new Date().getFullYear()} Your Name
      </Container>
    </footer>
  );
}
