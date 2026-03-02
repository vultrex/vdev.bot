import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "vultrex",
  repo: "vdev.bot",
  branch: "main"
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <img
            src="/vultrex.webp"
            alt="Vultrex"
            className="size-7 rounded-sm"
          />
          <span>Vultrex Development</span>
        </span>
      )
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`
  };
}
