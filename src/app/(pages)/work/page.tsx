"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import BodyWrapper from "@/app/bodyWrapper";
import { FaGithub } from "react-icons/fa";

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    homepage?: string;
    created_at: string;
    // [key: string]: any;
}

const languageColors: Record<string, string> = {
    javascript: "text-yellow-600",
    typescript: "text-blue-600",
    python: "text-blue-600",
    html: "text-orange-600",
    css: "text-indigo-600",
    shell: "text-green-600",
    java: "text-red-600",
    c: "text-gray-600",
    "c++": "text-gray-600",
    go: "text-cyan-600",
    rust: "text-orange-600",
    php: "text-purple-600",
    ruby: "text-red-600",
    dart: "text-sky-600",
    default: "text-blue-600",
};

const Page = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAllRepos = async () => {
            setIsLoading(true);
            setError(null);

            try {
                let page = 1;
                let allRepos: GitHubRepo[] = [];
                let hasMore = true;

                while (hasMore) {
                    const res = await fetch(
                        `https://api.github.com/users/talhah-dev/repos?per_page=100&page=${page}`,
                        { headers: { Accept: "application/vnd.github.v3+json" } }
                    );

                    if (!res.ok) {
                        throw new Error(res.status === 403 ? "GitHub API rate limit exceeded" : "Failed to fetch repositories");
                    }

                    const data: GitHubRepo[] = await res.json();

                    if (data.length === 0) {
                        hasMore = false;
                    } else {
                        allRepos = [...allRepos, ...data];
                        page++;
                    }
                }

                // Sort by creation date, newest first
                allRepos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                setRepos(allRepos);
            } catch {
                setError("An error occurred while fetching repositories");
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllRepos();
    }, []);

    return (
        <BodyWrapper>
            <div className="px-5 pb-6 lg:pt-0 pt-5">
                <h2 className="lg:text-3xl text-2xl lg:font-semibold font-medium text-zinc-300">
                    My Recent Work <span className="font-medium text-xs text-yellow-600">({repos.length}+ Projects)</span>
                </h2>
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="mt-2 text-zinc-400 text-sm">This is only Public Repositories</p>
                        <div className="w-16 lg:w-20 h-1.5 lg:mt-3 rounded-full bg-zinc-800 mt-2"></div>
                    </div>
                    <Link
                        href="https://github.com/talhah-dev"
                        target="_blank"
                        className="flex transition-all duration-500 hover:opacity-75 bg-zinc-950 px-3.5 py-2.5 font-medium tracking-wide rounded-full items-center gap-1.5"
                    >
                        <FaGithub />
                        <p className="text-zinc-200 text-sm">GitHub</p>
                    </Link>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-600"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-600 mt-8">
                        <p>{error}</p>
                        <p className="text-zinc-400 text-sm mt-2">
                            Please try again later or visit my{" "}
                            <Link href="https://github.com/talhah-dev" target="_blank" className="text-blue-600 hover:underline">
                                GitHub profile
                            </Link>{" "}
                            directly.
                        </p>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 lg:mt-8 mt-6">
                        {repos.map((repo) => {
                            const lang = repo.language?.toLowerCase() || "default";
                            const colorClass = languageColors[lang] || languageColors.default;

                            return (
                                <div key={repo.id} className="w-full bg-zinc-800 p-3 border border-zinc-700 rounded-lg">
                                    <Link
                                        href={repo.html_url}
                                        target="_blank"
                                        className="text-blue-600 hover:underline block font-medium mb-3"
                                    >
                                        {repo.name}
                                    </Link>
                                    <p className="text-zinc-500 font-medium text-sm line-clamp-2">
                                        {repo.description || "No description provided."}
                                    </p>
                                    <div className="flex items-center gap-0.5 mt-3">
                                        <GoDotFill className={colorClass} />
                                        <p className="text-xs text-zinc-400">{repo.language || "Unknown"}</p>
                                        {repo.homepage && (
                                            <Link
                                                href={repo.homepage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-auto text-xs font-medium transition-all duration-500 hover:opacity-70 text-yellow-600"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Live Preview
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </BodyWrapper>
    );
};

export default Page;