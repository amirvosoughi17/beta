"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TableCell, TableRow } from "@/components/ui/table";
import axiosInstance from "@/utils/axiosInstance";
import Spinner from "../Spinner";
import { FiAlertTriangle } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { MdOutlineDone } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { MdMoreVert } from "react-icons/md";
import { Label } from "../ui/label";
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

const ShowCase = ({ showcase }: { showcase: any }) => {
  const [loading, setLoading] = useState(false);
  const [succecc, setSuccess] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error, setError] = useState<any>("");
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: showcase.title,
      description: showcase.description,
      teches: showcase.teches,
      image: showcase.image,
      instagramHref: showcase.instagramHref,
      webHref: showcase.webHref,
      category: showcase.category,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      await axiosInstance.put(`/api/showcases/${showcase.id}`, data);
      setLoading(false);
      setSuccess(true);
    } catch (error: any) {
      console.error("Error updating showcase:", error);
      setError(error.response.data.message || "مشکلی پیش امده سلطان");
      setLoading(false);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (succecc) {
      setIsDialogOpen(false);
    }
  }, [succecc]);

  const getTechIcons = (teches: string[]) => {
    return teches.map((tech: string) => {
      const techInfo = technologies.find(
        (t) => t.name.toLowerCase() === tech.toLowerCase()
      );
      return techInfo ? techInfo.icon : null;
    });
  };
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/api/showcases/${showcase.id}`);
    } catch (error: any) {
      console.error("Error deleting showcase:", error);
      setError(error.response.data.message || "مشکلی پیش امده سلطان");
    }
  };

  return (
    <TableRow key={showcase.id}>
      <TableCell className="font-medium">{showcase.title}</TableCell>
      <TableCell className="">
        <div className="flex space-x-2 overflow-x-auto max-w-[110px]">
          {getTechIcons(showcase.teches).map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
      </TableCell>
      <TableCell className="hidden lg:table-cell">
        <Badge variant="outline">{showcase.category}</Badge>
      </TableCell>
      <TableCell>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MdMoreVert className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="">
                  <DropdownMenuItem>
                    <Button
                      size="icon"
                      className=" bg-transparent flex items-center gap-3 justify-start w-full hover:bg-transparent text-white"
                      onClick={() => setIsDialogOpen(true)}
                    >
                        <MdEdit  size={15}/>
                        <span>تغییر</span>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem className=" bg-red-500/50">
                    <Button
                      size="icon"
                      className=" bg-transparent w-full flex items-center gap-3 justify-start hover:bg-transparent text-white"
                      onClick={() => handleDelete()}
                    >
                        <FaRegTrashAlt size={15} />
                        <span>حذف</span>
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          </DialogTrigger>
          <DialogContent className="max-w-[365px] sm:max-w-[430px] max-h-[550px] overflow-y-auto">
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-3">
                <Label>عنوان</Label>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <Input
                      className="py-2 px-4 rounded-lg text-neutral-300"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>توضیحات</Label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      rows={4}
                      className="py-2 px-4 rounded-lg text-neutral-300"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>تکنولوژی ها</Label>
                <div className="flex items-center flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Controller
                      name="teches"
                      control={control}
                      key={tech.name}
                      render={({ field }) => (
                        <button
                          type="button"
                          onClick={() =>
                            field.onChange(
                              field.value.includes(tech.name)
                                ? field.value.filter(
                                    (t: string) => t !== tech.name
                                  )
                                : [...field.value, tech.name]
                            )
                          }
                          className={`w-[50px] relative h-[50px] flex items-center justify-center p-2 rounded-lg bg-neutral-900 ${
                            field.value.includes(tech.name)
                              ? "bg-neutral-800"
                              : ""
                          }`}
                        >
                          {field.value.includes(tech.name) && (
                            <div className="absolute w-full h-full rounded-lg bg-neutral-950/60 backdrop-blur-[1.5px] flex items-center justify-center">
                              <MdOutlineDone className="text-white" size={25} />
                            </div>
                          )}
                          {tech.icon}
                        </button>
                      )}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Label>عکس نمایه</Label>
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => (
                    <Input
                      className="py-2 px-4 rounded-lg text-neutral-300"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>لینک اینستاگرام</Label>
                <Controller
                  name="instagramHref"
                  control={control}
                  render={({ field }) => (
                    <Input
                      className="py-2 px-4 rounded-lg text-neutral-300"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>لینک وبسایت</Label>
                <Controller
                  name="webHref"
                  control={control}
                  render={({ field }) => (
                    <Input
                      className="py-2 px-4 rounded-lg text-neutral-300"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>دسته بندی</Label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Input
                      className="py-2 px-4 rounded-lg text-neutral-300"
                      {...field}
                    />
                  )}
                />
              </div>
              <Button>
                {loading ? (
                  <div className="flex w-full items-center justify-between">
                    <Spinner />
                    <span>لطفا صبر کنید ..</span>
                    <span className="w-[25px]"></span>
                  </div>
                ) : (
                  <span>{!succecc && "تغییر اطلاعات"}</span>
                )}
                {succecc && (
                  <div className="flex w-full  items-center justify-between">
                    <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center  text-green-600">
                      <MdOutlineDone size={25} />
                    </div>
                    <span className="text-[13px] lg:text-[14px] text-green-600">
                      تغییر اطلاعات با موفقیت انجام شد !
                    </span>
                    <span className="w-[25px]"></span>
                  </div>
                )}
              </Button>
              {error.length > 0 && (
                <div className="flex flex-col gap-2 bg-red-500 p-4 rounded-lg">
                  <FiAlertTriangle size={17} className="text-white" />
                  {error?.map((message: any, index: any) => (
                    <span key={index} className="text-white">
                      {message}
                    </span>
                  ))}
                </div>
              )}
            </form>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default ShowCase;
