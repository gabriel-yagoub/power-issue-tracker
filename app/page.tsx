import React, { useEffect, useState } from "react";
import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";
import { useRouter } from "next/navigation";

export default function Home() {
  const [issueCounts, setIssueCounts] = useState({
    open: 0,
    inProgress: 0,
    closed: 0,
  });
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const open = await prisma.issue.count({ where: { status: "OPEN" } });
      const inProgress = await prisma.issue.count({
        where: { status: "IN_PROGRESS" },
      });
      const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

      setIssueCounts({ open, inProgress, closed });
    };

    fetchData();
  }, []);

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary
          open={issueCounts.open}
          inProgress={issueCounts.inProgress}
          closed={issueCounts.closed}
        />
        <IssueChart
          open={issueCounts.open}
          inProgress={issueCounts.inProgress}
          closed={issueCounts.closed}
        />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Power Issue Tracker - Dashboard",
  description: "Overview of the current issues and status",
};

/*
import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";
import { useRouter } from "next/navigation";

const router = useRouter();
// Force refresh the page
router.refresh();

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Power Issue Tracker - Dashboard",
  description: "Overview of the current issues and status",
};
*/
