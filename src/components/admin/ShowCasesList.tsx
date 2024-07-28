"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import {
  FaReact,
  FaNodeJs,
  FaWordpressSimple,
  FaElementor,
} from "react-icons/fa";
import { RiNextjsFill, RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiNestjs } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { PiFigmaLogo } from "react-icons/pi";
import { Badge } from "../ui/badge";
import { MdEdit } from "react-icons/md";
import ShowCase from "./ShowCase";
import { Skeleton } from "@/components/ui/skeleton";
export const technologies = [
  {
    name: "typescript",
    icon: <BiLogoTypescript className="text-blue-600" size={30} />,
  },
  {
    name: "javascript",
    icon: <RiJavascriptFill className="text-amber-400" size={30} />,
  },
  { name: "React", icon: <FaReact className="text-blue-500" size={30} /> },
  { name: "nextjs", icon: <RiNextjsFill className="text-white" size={30} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={30} /> },
  { name: "mongodb", icon: <SiMongodb className="text-green-500" size={30} /> },
  {
    name: "postgres",
    icon: <BiLogoPostgresql className="text-blue-500" size={30} />,
  },
  { name: "express", icon: <SiExpress className="text-white" size={30} /> },
  { name: "nestJs", icon: <SiNestjs className="text-rose-600" size={30} /> },
  { name: "figma", icon: <PiFigmaLogo className="text-white" size={30} /> },
  {
    name: "wordpress",
    icon: <FaWordpressSimple className="text-blue-500" size={30} />,
  },
  {
    name: "elementor",
    icon: <FaElementor className="text-pink-600" size={30} />,
  },
];
interface Showcase {
  id: number;
  title: string;
  teches: string[];
  category: string;
}

const ShowCasesList: React.FC = () => {
  const [showcases, setShowcases] = useState<Showcase[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getShowcases = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/api/showcases");
        setShowcases(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching showcases:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getShowcases();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <TableRow>
            <TableCell className="font-medium ">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-[100px] lg:w-[120px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="">
              <Skeleton className="h-8 w-[35px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium ">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-[100px] lg:w-[120px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>

            <TableCell className="">
              <Skeleton className="h-8 w-[35px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium ">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-[100px] lg:w-[120px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>

            <TableCell className="">
              <Skeleton className="h-8 w-[35px]" />
            </TableCell>
          </TableRow>
        </>
      ) : (
        <TableBody>
          <>
            {showcases.map((showcase: Showcase) => (
              <ShowCase showcase={showcase} />
            ))}
          </>
        </TableBody>
      )}
    </>
  );
};

export default ShowCasesList;
