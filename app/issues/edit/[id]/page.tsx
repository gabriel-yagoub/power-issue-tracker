import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

interface Props {
  params: { id: string };
}

const EditIssuePage = ({ params }: Props) => {
  // Define a function to fetch issue data asynchronously
  const fetchIssue = async () => {
    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) },
    });
    return issue;
  };

  // Use React.useState to manage the issue state
  const [issue, setIssue] = React.useState(null);

  // Use React.useEffect to fetch issue data when the component mounts
  React.useEffect(() => {
    fetchIssue().then((data) => {
      if (!data) notFound();
      setIssue(data);
    });
  }, [params.id]); // Ensure fetch is triggered when params.id changes

  // If issue is not yet fetched, return loading indicator
  if (!issue) return <IssueFormSkeleton />;

  // Once issue is fetched, render the IssueForm component
  return <IssueForm issue={issue} />;
};

export default EditIssuePage;

/*
import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

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
