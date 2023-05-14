// Datos de ejemplo de devoluciones
const dailyData = {
    labels: ['1 May', '2 May', '3 May', '4 May', '5 May', '6 May', '7 May'],
    data: [3, 5, 2, 4, 1, 6, 3]
  };
  
  const monthlyData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    data: [15, 20, 18, 14, 22, 19]
  };
  
  const yearlyData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    data: [65, 78, 92, 81, 68]
  };
  
  // Configuración de gráfico
  const chartConfig = {
    type: 'bar',
    data: {
      labels: dailyData.labels,
      datasets: [{
        label: 'Devoluciones',
        data: dailyData.data,
        
    }]  


}

}

