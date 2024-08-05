"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import { useUser } from "@/context/UserContext";
import React from "react";
import OrdersList from "@/components/admin/OrdersList";
import CreateShowcaseForm from "@/components/admin/CreateShowcaseForm";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Home,
  LineChart,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import ShowCasesList from "@/components/admin/ShowCasesList";
import Spinner from "@/components/Spinner";

const AdminPage: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [showCasesLoading, setShowCasesLoading] = useState(false);
  const [showcases, setShowcases] = useState<any>();
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [orders, setOrders] = useState<any>();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.role !== "ADMIN") {
        return <div className=""></div>;
        setIsAdmin(false);
      } else {
        if (user?.role === "ADMIN") {
          setIsAdmin(true);
        }
      }
      setIsAdmin(true);
      await fetchShowcases();
      await fetchOrders();

      setLoading(false);
    };
    fetchData();
  }, [user, router]);
  const fetchShowcases = async () => {
    try {
      setShowCasesLoading(true);
      const response = await axiosInstance.get("/api/showcases");
      setShowcases(response.data);
    } catch (error) {
      console.error("Error fetching showcases:", error);
    } finally {
      setShowCasesLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      setOrdersLoading(true);
      const response = await axiosInstance.get("/api/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setOrdersLoading(false);
    }
  };

  return (
    <>
      {isAdmin ? (
        <div className="" dir="ltr">
          <TooltipProvider>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
              <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                  <Link
                    href="#"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                  >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        <Home className="h-5 w-5" />
                        <span className="sr-only">خانه</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">خانه</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/admin"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Orders</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">سفارشات</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/admin"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        <Package className="h-5 w-5" />
                        <span className="sr-only">Products</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">نمونه کارها</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/admin"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        <Users2 className="h-5 w-5" />
                        <span className="sr-only">Customers</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">بلاگ ها</TooltipContent>
                  </Tooltip>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        <Settings className="h-5 w-5" />
                        <span className="sr-only">Settings</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                  </Tooltip>
                </nav>
              </aside>
              <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        size="icon"
                        variant="outline"
                        className="sm:hidden"
                      >
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="sm:max-w-xs">
                      <nav className="grid gap-6 text-lg font-medium">
                        <Link
                          href="#"
                          className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        >
                          <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                          <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                          <Home className="h-5 w-5" />
                          Dashboard
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                          <ShoppingCart className="h-5 w-5" />
                          Orders
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-4 px-2.5 text-foreground"
                        >
                          <Package className="h-5 w-5" />
                          Products
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                          <Users2 className="h-5 w-5" />
                          Customers
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                          <LineChart className="h-5 w-5" />
                          Settings
                        </Link>
                      </nav>
                    </SheetContent>
                  </Sheet>
                  <Breadcrumb className="hidden md:flex">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link href="/">Home</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link href="/admin">Admin Dashboard</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <div className="relative ml-auto flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full"
                      ></Button>
                    </DropdownMenuTrigger>
                  </DropdownMenu>
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                  <Tabs defaultValue="all">
                    <div className="flex items-center" dir="ltr">
                      <TabsList>
                        <TabsTrigger value="all">سفارشات</TabsTrigger>
                        <TabsTrigger value="active">نمونه کارها</TabsTrigger>
                        <TabsTrigger value="draft" disabled>
                          بلاگ ها
                        </TabsTrigger>
                      </TabsList>
                      <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="sm" className="h-8 gap-1">
                              <PlusCircle className="h-3.5 w-3.5" />
                              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                افزدون
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>افزدون</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Drawer>
                              <DrawerTrigger asChild>
                                <Button className=" bg-transparent w-full h-8 flex items-start justify-start text-white hover:bg-neutral-700">
                                  نمونه کار
                                </Button>
                              </DrawerTrigger>
                              <DrawerContent className="mx-auto w-full  ">
                                <div className="mx-auto w-full max-w-sm md:max-w-md max-h-[550px] overflow-y-auto p-8">
                                  <CreateShowcaseForm />
                                </div>
                              </DrawerContent>
                            </Drawer>
                            <DropdownMenuCheckboxItem>
                              <Button
                                disabled
                                className="bg-transparent w-full h-8 flex items-start justify-start text-white hover:bg-neutral-700"
                              >
                                مقاله
                              </Button>
                            </DropdownMenuCheckboxItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <TabsContent dir="rtl" value="all">
                      <Card x-chunk="dashboard-06-chunk-0">
                        <CardHeader className=" flex lfex-col gap-2">
                          <CardTitle>سفارش ها</CardTitle>
                          <CardDescription className=" max-w-[90%]">
                            برای مشاهده اطلاعات کامل سفارش روی ایکون تغییر کلیک
                            کنید
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Table dir="ltr" className=" ">
                            <TableHeader>
                              <TableRow>
                                <TableHead>نام </TableHead>
                                <TableHead>شماره تماس</TableHead>
                                <TableHead className="hidden lg:table-cell">
                                  نام شرکت
                                </TableHead>
                                <TableHead className="hidden lg:table-cell">
                                  نوع وبسایت
                                </TableHead>
                                <TableHead>
                                  <span className="sr-only">تنظیمات</span>
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <OrdersList
                              orders={orders}
                              ordersLoading={ordersLoading}
                            />
                          </Table>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent dir="rtl" value="active">
                      <Card x-chunk="dashboard-06-chunk-1">
                        <CardHeader>
                          <CardTitle>نمونه کارها</CardTitle>

                          <CardDescription>
                            نمایش , ایجاد ,حذف ویا تغییر نمونه کارها
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Table dir="ltr">
                            <TableHeader>
                              <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Teches</TableHead>
                                <TableHead className="hidden lg:table-cell">
                                  Category
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <ShowCasesList
                              showcases={showcases}
                              showCasesLoading={showCasesLoading}
                            />
                          </Table>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent dir="rtl" value="draft">
                      <Card x-chunk="dashboard-06-chunk-2">
                        <CardHeader>
                          <CardTitle>بلاگ ها</CardTitle>
                          <CardDescription>
                            Manage your blog pبosts and view their engagement.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Table dir="ltr">
                            <TableHeader>
                              <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                  <span className="sr-only">Image</span>
                                </TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="hidden md:table-cell">
                                  Date
                                </TableHead>
                                <TableHead>
                                  <span className="sr-only">Actions</span>
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {/* Blog post rows */}
                              {/* Example row */}
                              <TableRow>
                                <TableCell className="hidden sm:table-cell">
                                  <Image
                                    alt="Blog image"
                                    className="aspect-square rounded-md object-cover"
                                    height="64"
                                    src="/placeholder.svg"
                                    width="64"
                                  />
                                </TableCell>
                                <TableCell className="font-medium">
                                  New Features in 2024
                                </TableCell>
                                <TableCell>
                                  <Badge variant="outline">Draft</Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  2024-02-10
                                </TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                      >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">
                                          Toggle menu
                                        </span>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuLabel>
                                        Actions
                                      </DropdownMenuLabel>
                                      <DropdownMenuItem>Edit</DropdownMenuItem>
                                      <DropdownMenuItem>
                                        Delete
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                              {/* Additional blog post rows */}
                            </TableBody>
                          </Table>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </main>
              </div>
            </div>
          </TooltipProvider>
        </div>
      ) : (
        <div className=" flex items-center justify-center h-screen">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default AdminPage;
