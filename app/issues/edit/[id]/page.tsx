"use client";

import React, { useEffect, useState } from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
import { useRouter } from "next/navigation";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

interface Props {
  params: { id: string };
}

const EditIssuePage = ({ params }: Props) => {
  const [issue, setIssue] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedIssue = await prisma.issue.findUnique({
        where: { id: parseInt(params.id) },
      });

      if (!fetchedIssue) notFound();
      else setIssue(fetchedIssue);
    };

    fetchData();
  }, [params.id]); // Trigger refetch when params.id changes

  if (!issue) return <IssueFormSkeleton />;

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;

/*
import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
import { useRouter } from "next/navigation";

const router = useRouter();
// Force refresh the page
router.refresh();

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
  
});

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
  
};

export default EditIssuePage;
*/
