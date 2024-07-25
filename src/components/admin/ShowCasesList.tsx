"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { TableCell, TableRow } from "@/components/ui/table";
import { Table, TableBody, TableHead, TableHeader } from "@/components/ui/table";

interface Showcase {
  id: number;
  title: string;
  teches: string;
  category: string;
}

const ShowCasesList: React.FC = () => {
  const [showcases, setShowcases] = useState<Showcase[]>([]);

  useEffect(() => {
    const getShowcases = async () => {
      try {
        const response = await axiosInstance.get("/api/showcases");
        setShowcases(response.data); 
      } catch (error) {
        console.error("Error fetching showcases:", error);
      }
    };

    getShowcases();
  }, []);

  return (
      <TableBody>
        {showcases.map((showcase: Showcase) => (
          <TableRow key={showcase.id}>
            <TableCell className="font-medium">{showcase.title}</TableCell>
            <TableCell>{showcase.teches}</TableCell>
            <TableCell className="hidden lg:table-cell">{showcase.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
  );
};

export default ShowCasesList;
