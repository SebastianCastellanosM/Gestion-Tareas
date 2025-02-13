import {
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Avatar, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";



const Index = () => {
  const { data: session } = useSession();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState<any[]>([]); // 🛠 Evita error de `never[]`


  return (
    <header className="flex h-16 items-center gap-6 px-4 lg:h-[70px] lg:px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-lg">
      {/* Menú móvil */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-4 bg-white shadow-xl w-64">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-4 text-gray-800 hover:text-blue-600">
              <Package2 className="h-7 w-7" />
              <span>Dashboard</span>
            </Link>
            <Link href="/projects" className="flex items-center gap-4 text-gray-800 hover:text-blue-600">
              <ShoppingCart className="h-7 w-7" />
              <span>Proyectos</span>
            </Link>
            <Link href="/tasks" className="flex items-center gap-4 text-gray-800 hover:text-blue-600">
              <Package className="h-7 w-7" />
              <span>Tareas</span>
            </Link>
            <Link href="/users" className="flex items-center gap-4 text-gray-800 hover:text-blue-600">
              <Users className="h-7 w-7" />
              <span>Usuarios</span>
            </Link>
          </nav>

          <div className="mt-auto">
            <Card className="bg-white shadow-md rounded-xl">
              <CardHeader className="p-4 flex gap-5 justify-center items-center">
                <Avatar>
                  <AvatarImage src={session?.user?.image} alt="User Avatar" />
                </Avatar>
                <div className="flex flex-col items-center">
                  <CardTitle>{session?.user?.name}</CardTitle>
                  <CardContent className="p-2 text-sm text-gray-600">
                    {session?.user?.role}
                  </CardContent>
                </div>
              </CardHeader>
            </Card>
          </div>
        </SheetContent>
      </Sheet>

      {/* Avatar de usuario y dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full ml-auto">
            <Avatar>
              <AvatarImage src={session?.user?.image} alt="User Avatar" />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Configuraciones</DropdownMenuItem>
          <DropdownMenuItem>Soporte</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>Cerrar sesión</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Index;