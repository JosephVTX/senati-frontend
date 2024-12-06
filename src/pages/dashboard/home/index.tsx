import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import {
  Users,
  GraduationCap,
  BookOpenText,
  Briefcase,
  TrendingUp,
  BookOpen,
  Clock,
  Award,
} from "lucide-react";

// Datos
const userStats = [
  {
    name: "Enero",
    usuarios: 45,
    estudiantes: 120,
    profesores: 15,
    ingresos: 25000,
  },
  {
    name: "Febrero",
    usuarios: 50,
    estudiantes: 135,
    profesores: 18,
    ingresos: 30000,
  },
  {
    name: "Marzo",
    usuarios: 55,
    estudiantes: 150,
    profesores: 22,
    ingresos: 35000,
  },
  {
    name: "Abril",
    usuarios: 60,
    estudiantes: 165,
    profesores: 25,
    ingresos: 40000,
  },
];

const cursosData = [
  { name: "Programación", value: 400, matriculados: 250 },
  { name: "Diseño", value: 300, matriculados: 180 },
  { name: "Marketing", value: 200, matriculados: 120 },
  { name: "Idiomas", value: 100, matriculados: 75 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const EspecialidadesData = [
  { name: "Tecnología", estudiantes: 250, profesores: 15, cursos: 10 },
  { name: "Negocios", estudiantes: 180, profesores: 10, cursos: 7 },
  { name: "Diseño", estudiantes: 120, profesores: 8, cursos: 5 },
  { name: "Humanidades", estudiantes: 90, profesores: 6, cursos: 4 },
];

const performanceData = [
  { subject: "Matemáticas", A: 90, B: 75, C: 60 },
  { subject: "Programación", A: 85, B: 80, C: 65 },
  { subject: "Diseño", A: 70, B: 65, C: 55 },
  { subject: "Marketing", A: 75, B: 70, C: 60 },
  { subject: "Idiomas", A: 80, B: 75, C: 70 },
];

const StudentManagementDashboard = () => {
  return (
    <div className=" text-gray-800 dark:text-gray-100">
      <div className="p-4">
        <h1 className="text-4xl font-extrabold mb-8 text-center">
          Dashboard de Gestión Educativa
        </h1>

        {/* Tarjetas de resumen */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: Users,
              title: "Total Usuarios",
              value: "250",
              color: "blue",
            },
            {
              icon: GraduationCap,
              title: "Total Estudiantes",
              value: "650",
              color: "green",
            },
            {
              icon: Briefcase,
              title: "Total Profesores",
              value: "75",
              color: "purple",
            },
            {
              icon: BookOpen,
              title: "Total Cursos",
              value: "25",
              color: "red",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex items-center`}
            >
              <card.icon
                className={`mr-4 text-${card.color}-500 dark:text-${card.color}-400`}
                size={48}
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                  {card.title}
                </h2>
                <p
                  className={`text-3xl font-bold text-${card.color}-600 dark:text-${card.color}-400`}
                >
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Crecimiento de Usuarios */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <TrendingUp className="mr-2 text-green-500 dark:text-green-400" />
              Crecimiento de Usuarios
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userStats}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="dark:stroke-gray-600"
                />
                <XAxis dataKey="name" className="dark:fill-gray-300" />
                <YAxis className="dark:fill-gray-300" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#333", color: "#fff" }}
                />
                <Legend className="dark:fill-gray-300" />
                <Bar dataKey="usuarios" fill="#8884d8" name="Usuarios" />
                <Bar dataKey="estudiantes" fill="#82ca9d" name="Estudiantes" />
                <Bar dataKey="profesores" fill="#ffc658" name="Profesores" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Distribución de Cursos */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="mr-2 text-blue-500 dark:text-blue-400" />
              Distribución de Cursos
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={cursosData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {cursosData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#333", color: "#fff" }}
                />
                <Legend className="dark:fill-gray-300" />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Rendimiento Académico */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="mr-2 text-yellow-500 dark:text-yellow-400" />
              Rendimiento Académico
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart outerRadius={90} data={performanceData}>
                <PolarGrid className="dark:stroke-gray-600" />
                <PolarAngleAxis
                  dataKey="subject"
                  className="dark:fill-gray-300"
                />
                <PolarRadiusAxis className="dark:fill-gray-300" />
                <Radar
                  name="Grupo A"
                  dataKey="A"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Grupo B"
                  dataKey="B"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Grupo C"
                  dataKey="C"
                  stroke="#ffc658"
                  fill="#ffc658"
                  fillOpacity={0.6}
                />
                <Legend className="dark:fill-gray-300" />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg col-span-full transition-all">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700 dark:text-gray-200">
            <Clock className="mr-2 text-purple-500" />
            Estudiantes por Especialidad
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={EspecialidadesData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="gray"
                className="dark:stroke-gray-700"
              />
              <XAxis
                dataKey="name"
                tick={{ fill: "gray" }}
                className="dark:fill-gray-400"
              />
              <YAxis tick={{ fill: "gray" }} className="dark:fill-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "8px",
                }}
                wrapperStyle={{
                  border: "1px solid gray",
                }}
                labelStyle={{ color: "gray" }}
                /* className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200" */
              />
              <Legend
                wrapperStyle={{ color: "gray" }}
                className="dark:text-gray-400"
              />
              <Line
                type="monotone"
                dataKey="estudiantes"
                stroke="#8884d8"
                name="Estudiantes"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="profesores"
                stroke="#82ca9d"
                name="Profesores"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="cursos"
                stroke="#ffc658"
                name="Cursos"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default StudentManagementDashboard;
