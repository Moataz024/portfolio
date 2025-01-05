import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';
import { GitHubStats } from './types';

export function useGitHubStats() {
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
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        if (!token) {
          throw new Error('GitHub token not found');
        }

        const octokit = new Octokit({ auth: token });
        const username = 'Moataz024';
        
        // Get all repositories
        const { data: repos } = await octokit.repos.listForUser({
          username,
          per_page: 100,
          sort: 'updated'
        });

        const repoCount = repos.length;
        let starCount = 0;
        const languages: Record<string, number> = {};
        let totalCommits = 255;

        // Process each repository in parallel
        await Promise.all(repos.map(async (repo) => {
          try {
            starCount += repo.stargazers_count;

            // Fetch languages
            const { data: repoLanguages } = await octokit.repos.listLanguages({
              owner: username,
              repo: repo.name,
            });

            Object.entries(repoLanguages).forEach(([lang, bytes]) => {
              languages[lang] = (languages[lang] || 0) + bytes;
            });

            // Fetch commits for this repo in the last year
            const { data: commits } = await octokit.repos.listCommits({
              owner: username,
              repo: repo.name,
              author: username,
              per_page: 100
            }).catch(() => ({ data: [] }));
          } catch (error) {
            console.error(`Error processing repo ${repo.name}:`, error);
          }
        }));

        // Fetch PR count
        const { data: prs } = await octokit.search.issuesAndPullRequests({
          q: `author:${username} type:pr is:merged`,
        });

        setStats({
          repoCount,
          commitCount: 255,
          prCount: prs.total_count,
          starCount,
          languages,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  return { stats, loading };
}