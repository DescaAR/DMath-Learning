import type { ContentStatus } from "@/data/site-data";

const labels: Record<ContentStatus, string> = {
  published: "Published",
  draft: "Draft",
  planned: "Planned",
};

export function StatusBadge({ status }: { status: ContentStatus }) {
  return <span className={"status-badge status-" + status}>{labels[status]}</span>;
}
