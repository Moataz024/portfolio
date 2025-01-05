export interface GitHubStats {
  repoCount: number;
  commitCount: number;
  prCount: number;
  starCount: number;
  languages: Record<string, number>;
}

export interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}