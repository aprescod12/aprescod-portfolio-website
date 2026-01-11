import Container from "@/components/Container";
import { track } from "@/lib/data";

export default function TrackPage() {
  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-4">
        Track & Field
      </h1>

      <ul className="space-y-2">
        {track.prs.map((pr) => (
          <li key={pr.event}>
            {pr.event}: {pr.time}
          </li>
        ))}
      </ul>
    </Container>
  );
}
