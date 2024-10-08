import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Calendar, TrendingUp, Activity, LucideIcon } from 'lucide-react';

// Interfaces para tipagem
interface GrowthData {
  month: string;
  membros: number;
  visitantes: number;
}

interface AttendanceData {
  celula: string;
  presenca: number;
}

interface Stats {
  totalMembers: number;
  totalCells: number;
  averageAttendance: number;
  growthRate: string;
}

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change: string;
}

interface ChartCardProps {
  title: string;
  chart: React.ReactNode;
}

// Componentes auxiliares
const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value, change }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-center">
    <div className="mr-4 text-blue-500 dark:text-blue-400">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      <p className="text-sm text-green-500">{change}</p>
    </div>
  </div>
);

const ChartCard: React.FC<ChartCardProps> = ({ title, chart }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h3>
    {chart}
  </div>
);

// Componente principal do Dashboard
const Dashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>('month');
  const [growthData, setGrowthData] = useState<GrowthData[]>([]);
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalMembers: 0,
    totalCells: 0,
    averageAttendance: 0,
    growthRate: '0'
  });

  // Simula a busca de dados do servidor
  useEffect(() => {
    const fetchData = () => {
      // Aqui você faria uma chamada API real
      // Por enquanto, vamos simular dados aleatórios
      const newGrowthData: GrowthData[] = [
        { month: 'Jan', membros: Math.floor(Math.random() * 1000), visitantes: Math.floor(Math.random() * 500) },
        { month: 'Fev', membros: Math.floor(Math.random() * 1000), visitantes: Math.floor(Math.random() * 500) },
        { month: 'Mar', membros: Math.floor(Math.random() * 1000), visitantes: Math.floor(Math.random() * 500) },
        { month: 'Abr', membros: Math.floor(Math.random() * 1000), visitantes: Math.floor(Math.random() * 500) },
        { month: 'Mai', membros: Math.floor(Math.random() * 1000), visitantes: Math.floor(Math.random() * 500) },
        { month: 'Jun', membros: Math.floor(Math.random() * 1000), visitantes: Math.floor(Math.random() * 500) },
      ];

      const newAttendanceData: AttendanceData[] = [
        { celula: 'Célula A', presenca: Math.floor(Math.random() * 100) },
        { celula: 'Célula B', presenca: Math.floor(Math.random() * 100) },
        { celula: 'Célula C', presenca: Math.floor(Math.random() * 100) },
        { celula: 'Célula D', presenca: Math.floor(Math.random() * 100) },
        { celula: 'Célula E', presenca: Math.floor(Math.random() * 100) },
      ];

      setGrowthData(newGrowthData);
      setAttendanceData(newAttendanceData);

      setStats({
        totalMembers: newGrowthData[newGrowthData.length - 1].membros,
        totalCells: newAttendanceData.length,
        averageAttendance: Math.floor(newAttendanceData.reduce((acc, curr) => acc + curr.presenca, 0) / newAttendanceData.length),
        growthRate: ((newGrowthData[newGrowthData.length - 1].membros - newGrowthData[0].membros) / newGrowthData[0].membros * 100).toFixed(2)
      });
    };

    fetchData();
    // Atualiza os dados a cada 5 segundos para simular atualizações em tempo real
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Dashboard</h1>
      
      <div className="mb-6">
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="week">Última Semana</option>
          <option value="month">Último Mês</option>
          <option value="year">Último Ano</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={Users} title="Total de Membros" value={stats.totalMembers} change={`+${stats.growthRate}%`} />
        <StatCard icon={Calendar} title="Total de Células" value={stats.totalCells} change="Novo: +2" />
        <StatCard icon={Activity} title="Média de Presença" value={`${stats.averageAttendance}%`} change="+5.2%" />
        <StatCard icon={TrendingUp} title="Taxa de Crescimento" value={`${stats.growthRate}%`} change="Mensal" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard
          title="Crescimento da Igreja"
          chart={
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="membros" stroke="#8884d8" />
                <Line type="monotone" dataKey="visitantes" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          }
        />
        <ChartCard
          title="Presença por Célula"
          chart={
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="celula" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="presenca" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;