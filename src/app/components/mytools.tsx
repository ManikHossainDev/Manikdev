"use client";
// imported icons for toolbox items
import JsIcon from "@/assets/icons/js.svg";
import TsIcon from "@/assets/icons/typescript.svg"; 
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/next.svg";
import ReduxIcon from "@/assets/icons/redux.svg"; 
import HtmlIcon from "@/assets/icons/html5.svg"; 
import TailwindIcon from "@/assets/icons/tailwind.svg"; 
import NodeIcon from "@/assets/icons/nodejs.svg"; // 
import ExpressIcon from "@/assets/icons/beexpress-driver-svgrepo-com.svg"; 
import MongooseIcon from "@/assets/icons/mongoose-svgrepo-com.svg"; 
import PrismaIcon from "@/assets/icons/prisma-svgrepo-com.svg"; 
import MongoDBIcon from "@/assets/icons/mongodb-svgrepo-com.svg"; 
import PostgreSQLIcon from "@/assets/icons/postgresql-svgrepo-com.svg"; 
import MySQLIcon from "@/assets/icons/mysql-logo-svgrepo-com.svg";
import VSCodeIcon from "@/assets/icons/vscode3-svgrepo-com.svg";
import GithubIcon from "@/assets/icons/github-svgrepo-com.svg";
import VercelIcon from "@/assets/icons/vercel-svgrepo-com.svg";
import PostmanIcon from "@/assets/icons/postman-icon-svgrepo-com.svg"; 
import ChromeIcon from "@/assets/icons/chrome.svg";

import { ToolboxItems } from "@/components/ToolboxItems";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";

const toolboxItems = [
    {
      title: "JavaScript",
      iconType: JsIcon,
    },
    {
      title: "TypeScript",
      iconType: TsIcon,
    },
    {
      title: "HTML5",
      iconType: HtmlIcon,
    },
    {
      title: "CSS3",
      iconType: CssIcon,
    },
    {
      title: "ReactJS",
      iconType: ReactIcon,
    },
    {
      title: "NextJS",
      iconType: NextIcon,
    },
    {
      title: "Redux",
      iconType: ReduxIcon,
    },
    {
      title: "TailwindCSS",
      iconType: TailwindIcon,
    },
    {
      title: "NodeJS",
      iconType: NodeIcon,
    },
    {
      title: "ExpressJS",
      iconType: ExpressIcon,
    },
    {
      title: "Mongoose",
      iconType: MongooseIcon,
    },
    {
      title: "Prisma",
      iconType: PrismaIcon,
    },
    {
      title: "MongoDB",
      iconType: MongoDBIcon,
    },
    {
      title: "PostgreSQL",
      iconType: PostgreSQLIcon,
    },
    {
      title: "MySQL",
      iconType: MySQLIcon,
    },
    {
      title: "VSCode",
      iconType: VSCodeIcon,
    },
    {
      title: "GitHub",
      iconType: GithubIcon,
    },
    {
      title: "Vercel",
      iconType: VercelIcon,
    },
    {
      title: "Postman",
      iconType: PostmanIcon,
    },
    {
      title: "Chrome",
      iconType: ChromeIcon,
    },
  ];



export const AboutSection = () => {
  return (
    <div className="py-15 lg:py-10">
      <div className="">
        {/* my tools */}
        <Card className="h-[360px] md:col-span-3 lg:col-span-2">
          <CardHeader
            title="My Toolbox"
            description="Explore the technologies I use to craft digital experiences. From JavaScript, React, and Next.js for dynamic interfaces to TailwindCSS for sleek designs, I also leverage Node.js, MongoDB, Git, and Vercel to build and deploy robust applications."
            className=""
          />
          <ToolboxItems
            items={toolboxItems}
            className=""
            itemsWrapperClassName="animate-move-left [animation-duration:30s]"
          />
          <ToolboxItems
            items={toolboxItems}
            className="mt-6"
            itemsWrapperClassName="animate-move-right [animation-duration:15s]"
          />
        </Card>
      </div>
    </div>
  );
};
