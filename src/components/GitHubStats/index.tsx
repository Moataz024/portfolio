import React from 'react';
import { GithubIcon, GitPullRequestIcon, StarIcon, BookIcon } from 'lucide-react';
import { StatCard } from './StatCard';
import { LanguageChart } from './LanguageChart';
import { useGitHubStats } from './useGitHubStats';

export default function GitHubStats() {
  const { stats, loading } = useGitHubStats();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nebula-purple"></div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <StatCard
          icon={<BookIcon />}
          label="Repositories"
          value={stats.repoCount}
        />
        <StatCard
          icon={<GithubIcon />}
          label="Commits (Last Year)"
          value={stats.commitCount}
        />
        <StatCard
          icon={<GitPullRequestIcon />}
          label="Pull Requests Merged"
          value={stats.prCount}
        />
        <StatCard
          icon={<StarIcon />}
          label="Total Stars"
          value={stats.starCount}
        />
      </div>
      <LanguageChart languages={stats.languages} />
    </div>
  );
}