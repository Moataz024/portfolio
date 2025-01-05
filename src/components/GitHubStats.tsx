import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { GithubIcon, GitPullRequestIcon, StarIcon, BookIcon } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

interface GitHubStats {
  repoCount: number;
  commitCount: number;
  prCount: number;
  starCount: number;
  languages: Record<string, number>;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    repoCount: 0,
    commitCount: 255,
    prCount: 0,
    starCount: 0,
    languages: {},
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const octokit = new Octokit({
          auth: import.meta.env.VITE_GITHUB_TOKEN,
        });

        const username = 'Moataz024';

        // Fetch repositories
        const { data: repos } = await octokit.repos.listForUser({
          username,
          per_page: 100,
        });

        // Calculate stats
        const repoCount = repos.length;
        let starCount = 0;
        const languages: Record<string, number> = {};

        // Fetch additional data for each repo
        for (const repo of repos) {
          starCount += repo.stargazers_count;

          // Fetch languages
          const { data: repoLanguages } = await octokit.repos.listLanguages({
            owner: username,
            repo: repo.name,
          });

          Object.entries(repoLanguages).forEach(([lang, bytes]) => {
            languages[lang] = (languages[lang] || 0) + bytes;
          });
        }

        // Fetch commit count for the last year
        const { data: commitActivity } = await octokit.repos.getCommitActivityStats({
          owner: username,
          repo: repos[0].name,
        });

        const commitCount = 255;

        // Fetch PR count
        const { data: prs } = await octokit.search.issuesAndPullRequests({
          q: `author:${username} type:pr is:merged`,
        });

        setStats({
          repoCount,
          commitCount,
          prCount: prs.total_count,
          starCount,
          languages,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const languageChartData = {
    labels: Object.keys(stats.languages),
    datasets: [
      {
        data: Object.values(stats.languages),
        backgroundColor: [
          '#7e57c2',
          '#42a5f5',
          '#9c89e2',
          '#5eead4',
          '#64b5f6',
          '#81c784',
        ],
        borderWidth: 0,
      },
    ],
  };

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
      <div className="bg-nebula-card/50 backdrop-blur rounded-lg p-6">
        <h3 className="text-xl font-light text-white mb-4">Language Distribution</h3>
        <Pie
          data={languageChartData}
          options={{
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: '#cfd8dc',
                  font: {
                    family: 'Roboto',
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="bg-nebula-card/50 backdrop-blur rounded-lg p-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-nebula-purple">{icon}</span>
        <span className="text-nebula-text">{label}</span>
      </div>
      <div className="text-2xl font-light text-white">{value.toLocaleString()}</div>
    </div>
  );
}